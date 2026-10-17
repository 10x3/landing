CREATE TABLE IF NOT EXISTS bookings (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slot         TEXT    NOT NULL UNIQUE,      -- meeting start, ISO 8601 UTC
  name         TEXT    NOT NULL,
  email        TEXT    NOT NULL,
  product      TEXT    NOT NULL,
  integrations TEXT    NOT NULL DEFAULT '',
  users        TEXT    NOT NULL DEFAULT '',
  idea         TEXT    NOT NULL DEFAULT '',
  timezone     TEXT    NOT NULL DEFAULT '',
  ip           TEXT    NOT NULL DEFAULT '',
  created_at   TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS bookings_ip_created ON bookings (ip, created_at);
