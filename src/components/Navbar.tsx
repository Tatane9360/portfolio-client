export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-4 flex justify-between items-center pointer-events-none">
      <div className="brutalist-border bg-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] pointer-events-auto">
        <span className="text-2xl font-black uppercase tracking-tighter">DEV.STUDIO</span>
      </div>
      <a
        href="#contact"
        className="pointer-events-auto brutalist-border bg-[#FFE800] font-bold uppercase px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all duration-150"
      >
        Discutons
      </a>
    </nav>
  );
}
