// Tiny classnames joiner — filters falsy values so you can do
// cn('base', condition && 'active', props.className)
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
