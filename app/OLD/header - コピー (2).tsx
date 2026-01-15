const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "AI Evaluation", href: "/ai-evaluation" },
  { label: "Awards", href: "/awards" },
  { label: "Winners", href: "/results" },
  { label: "Apply", href: "/apply" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            AIFA
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            International Music Competition
          </span>
        </a>

        {/* Nav items */}
        <div className="hidden gap-6 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
