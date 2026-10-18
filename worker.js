import { EmailMessage } from 'cloudflare:email';

// Booking rules, shared with the slot picker in public/index.html.
const SLOT_MINUTES = 30;
const MIN_NOTICE_HOURS = 4;
const HORIZON_DAYS = 14;
const MAX_PER_IP_PER_DAY = 5;
const MAX_REQUESTS_PER_IP_PER_DAY = 10;

const PRODUCTS = ['Chatbot', 'Web app', 'Mobile app', 'Data pipeline', 'Custom'];
const REQUEST_KINDS = { demo: 'Demo access', build: 'Build request' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === '/api/slots' && request.method === 'GET') return takenSlots(env);
    if (pathname === '/api/book' && request.method === 'POST') return book(request, env);
    if (pathname === '/api/request' && request.method === 'POST') return submitRequest(request, env);
    if (pathname.startsWith('/api/')) return json({ error: 'Not found' }, 404);
    return env.ASSETS.fetch(request);
  },
};

async function takenSlots(env) {
  const { results } = await env.DB
    .prepare('SELECT slot FROM bookings WHERE slot >= ? ORDER BY slot')
    .bind(new Date().toISOString())
    .all();
  return json({ taken: results.map((r) => r.slot) }, 200, { 'Cache-Control': 'no-store' });
}

async function book(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot: real people never fill the hidden "website" field.
  if (body.website) return json({ ok: true });

  const b = {
    name: clean(body.name, 120),
    email: clean(body.email, 200).toLowerCase(),
    product: clean(body.product, 40),
    integrations: clean(body.integrations, 300),
    users: clean(body.users, 40),
    idea: clean(body.idea, 1500, true),
    timezone: clean(body.timezone, 80),
    slot: clean(body.slot, 40),
  };

  if (!b.name) return json({ error: 'Please add your name.' }, 400);
  if (!EMAIL_RE.test(b.email)) return json({ error: 'Please add a valid email.' }, 400);
  if (!PRODUCTS.includes(b.product)) b.product = 'Not chosen';

  const slotError = checkSlot(b.slot);
  if (slotError) return json({ error: slotError }, 400);
  b.slot = new Date(b.slot).toISOString();

  const ip = request.headers.get('CF-Connecting-IP') || '';
  const dayAgo = new Date(Date.now() - 864e5).toISOString();
  const recent = await env.DB
    .prepare('SELECT COUNT(*) AS n FROM bookings WHERE ip = ? AND created_at >= ?')
    .bind(ip, dayAgo)
    .first('n');
  if (recent >= MAX_PER_IP_PER_DAY) return json({ error: 'Too many bookings from this network today. Email us instead.' }, 429);

  try {
    await env.DB
      .prepare(`INSERT INTO bookings (slot, name, email, product, integrations, users, idea, timezone, ip)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .bind(b.slot, b.name, b.email, b.product, b.integrations, b.users, b.idea, b.timezone, ip)
      .run();
  } catch (err) {
    if (String(err).includes('UNIQUE')) return json({ error: 'Someone just took this slot. Please pick another one.' }, 409);
    throw err;
  }

  // The booking is saved even if the email fails; it can always be read from D1.
  try {
    await notify(env, b);
  } catch (err) {
    console.error('Booking email failed', err);
  }

  return json({ ok: true, slot: b.slot });
}

// Demo-access and build requests: saved to D1, then emailed to the owner.
async function submitRequest(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }
  if (body.website) return json({ ok: true });

  const r = {
    kind: clean(body.kind, 20),
    name: clean(body.name, 120),
    email: clean(body.email, 200).toLowerCase(),
    message: clean(body.message, 3000, true),
  };
  if (!REQUEST_KINDS[r.kind]) return json({ error: 'Invalid request.' }, 400);
  if (!EMAIL_RE.test(r.email)) return json({ error: 'Please enter a valid email address.' }, 400);
  if (r.kind === 'build' && r.message.length < 10) return json({ error: 'Please tell us a little more about what you need.' }, 400);

  const ip = request.headers.get('CF-Connecting-IP') || '';
  const dayAgo = new Date(Date.now() - 864e5).toISOString();
  const recent = await env.DB
    .prepare('SELECT COUNT(*) AS n FROM requests WHERE ip = ? AND created_at >= ?')
    .bind(ip, dayAgo)
    .first('n');
  if (recent >= MAX_REQUESTS_PER_IP_PER_DAY) return json({ error: 'Too many requests from this network today. Please try again tomorrow.' }, 429);

  await env.DB
    .prepare('INSERT INTO requests (kind, name, email, message, ip) VALUES (?, ?, ?, ?, ?)')
    .bind(r.kind, r.name, r.email, r.message, ip)
    .run();

  const who = r.name ? `${r.name} <${r.email}>` : r.email;
  const text = r.kind === 'demo'
    ? [`Demo access requested by ${who}.`, '', 'Send them their demo environment access.', 'Reply to this email to answer them directly.'].join('\n')
    : [`Build request from ${who}`, '', 'Request:', r.message, '', 'Reply to this email to answer them directly.'].join('\n');
  try {
    await sendMail(env, { subject: `${REQUEST_KINDS[r.kind]}: ${who}`, text, replyName: r.name, replyEmail: r.email });
  } catch (err) {
    console.error('Request email failed', err);
  }

  return json({ ok: true });
}

function checkSlot(value) {
  const t = Date.parse(value);
  if (Number.isNaN(t)) return 'Please pick a time.';
  if (t % (SLOT_MINUTES * 60e3) !== 0) return 'Please pick one of the listed times.';
  if (t < Date.now() + MIN_NOTICE_HOURS * 36e5) return `That slot is less than ${MIN_NOTICE_HOURS} hours away. Please pick a later one.`;
  if (t > Date.now() + HORIZON_DAYS * 864e5) return 'Please pick a time within the next two weeks.';
  return null;
}

async function notify(env, b) {
  const when = new Date(b.slot);
  const fmt = (tz) => when.toLocaleString('en-GB', { timeZone: tz, weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  let clientTime = '';
  try { clientTime = b.timezone ? fmt(b.timezone) : ''; } catch { /* unknown time zone */ }

  const text = [
    `New 10x3 booking: ${b.name} <${b.email}>`,
    '',
    `When:          ${when.toISOString().replace('T', ' ').slice(0, 16)} UTC`,
    clientTime ? `Their time:    ${clientTime} (${b.timezone})` : null,
    `Building:      ${b.product}`,
    `Integrations:  ${b.integrations || '-'}`,
    `Users (yr 1):  ${b.users || '-'}`,
    '',
    'Idea:',
    b.idea || '-',
    '',
    `Environment must be ready by ${when.toISOString().replace('T', ' ').slice(0, 16)} UTC.`,
    'Reply to this email to answer them directly.',
  ].filter((l) => l !== null).join('\n');

  const subject = `Booking: ${b.product} · ${b.name} · ${when.toISOString().slice(0, 16).replace('T', ' ')} UTC`;
  await sendMail(env, { subject, text, replyName: b.name, replyEmail: b.email });
}

async function sendMail(env, { subject, text, replyName, replyEmail }) {
  const raw = [
    `From: 10x3 Website <${env.MAIL_FROM}>`,
    `To: <${env.MAIL_TO}>`,
    `Reply-To: ${replyName ? `${encodeWord(replyName)} ` : ''}<${replyEmail}>`,
    `Subject: ${encodeWord(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${env.MAIL_FROM.split('@')[1]}>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64(text).replace(/.{76}/g, '$&\r\n'),
  ].join('\r\n');

  await env.MAIL.send(new EmailMessage(env.MAIL_FROM, env.MAIL_TO, raw));
}

// Strips control characters (and newlines unless allowed) so input can't inject email headers.
function clean(value, max, multiline = false) {
  if (typeof value !== 'string') return '';
  const re = multiline ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g;
  return value.replace(re, '').trim().slice(0, max);
}

function encodeWord(s) {
  return /^[A-Za-z0-9 .'-]*$/.test(s) ? s : `=?UTF-8?B?${base64(s)}?=`;
}

function base64(s) {
  const bytes = new TextEncoder().encode(s);
  let bin = '';
  for (const byte of bytes) bin += String.fromCharCode(byte);
  return btoa(bin);
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...headers } });
}
