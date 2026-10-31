/** Viewport fraction where an anchor is reached; anchor links scroll to the same line. */
const FOCUS = 0.4;

/**
 * Scroll position at which an anchor is reached (shared with anchor links).
 * A [data-dot-land] anchor is reached once its whole section sits under the fixed navbar,
 * so a full-screen section is entirely visible when the circle lands, not cut at the top.
 */
export function dockScroll(a: HTMLElement) {
  if (a.hasAttribute('data-dot-land')) {
    return a.closest('section')!.getBoundingClientRect().top + scrollY - (document.querySelector<HTMLElement>('nav[aria-label="Navigation principale"]')?.offsetHeight ?? 0);
  }
  const r = a.getBoundingClientRect();
  return r.top + scrollY + r.height / 2 - innerHeight * FOCUS;
}
