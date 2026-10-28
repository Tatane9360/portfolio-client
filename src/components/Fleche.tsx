/** Arrow drawn in the stitch's stroke weight; `diag` points up-right for external links. */
export default function Fleche({ diag = false }: { diag?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`size-[1.1em] shrink-0 ${diag ? '-rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}
