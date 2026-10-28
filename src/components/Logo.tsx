/** Brand mark: the ensō (a mask, so it takes the text color) and the name set in the site's own typeface. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-[0.3em] font-bold leading-none tracking-[-0.02em] [font-stretch:87.5%] ${className}`}>
      <span aria-hidden="true" className="logo-enso block size-[1.65em]" />
      esumi
    </span>
  );
}
