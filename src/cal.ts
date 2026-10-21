import type { MouseEvent } from 'react';
import { legal } from './legal';

export const cal = legal.cal ? new URL(legal.cal) : null;

// Cal.com's script is third-party: only loaded when the visitor nears the contact section or points at a booking link.
let calLoaded = false;
export function loadCal() {
  if (!cal || calLoaded) return;
  calLoaded = true;
  const script = document.createElement('script');
  script.src = '/cal-embed.js';
  script.dataset.origin = cal.origin;
  document.head.appendChild(script);
}

/** Spread on any "book a call" link: opens the Cal.com popup once ready, otherwise the link's own href applies. */
export const calAttrs = cal ? {
  'data-cal-link': cal.pathname.slice(1),
  'data-cal-config': '{"layout":"month_view","theme":"light"}',
  onPointerEnter: loadCal,
  onFocus: loadCal,
  onClick: (e: MouseEvent) => { if (document.documentElement.dataset.cal === 'ready') e.preventDefault(); },
} : {};
