export default function Header() {
  return (
    <header className="w-full shadow-sm py-4 bg-white">
      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-wide">
          AIMC
        </a>

        <div className="flex gap-6 text-sm font-semibold">
          <a href="/guidelines">Guidelines</a>
          <a href="/categories">Categories</a>
          <a href="/jury">Jury</a>
          <a href="/entry">Entry</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
