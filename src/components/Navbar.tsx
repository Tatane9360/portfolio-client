const liens = [
  { href: '#approche', label: 'Approche' },
  { href: '#projets', label: 'Projets' },
  { href: '#methode', label: 'Méthode' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-4 py-4 bg-paper text-ink md:px-10">
      <a href="#top" className="font-display text-lg font-extrabold tracking-tight">dev.studio</a>
      <ul className="hidden gap-8 md:flex">
        {liens.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="label hover:underline underline-offset-4">{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="label border border-current rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors">
        Discutons
      </a>
    </nav>
  );
}
