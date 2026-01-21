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
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        width: "100%",
        backdropFilter: "blur(12px)",
        background: "rgba(5, 8, 22, 0.92)",
        borderBottom: "1px solid rgba(148,163,184,0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo + text */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <img
              src="/aimc-logo.png"
              alt="AIFA International Music Competition logo"
              style={{
                height: "44px",
                width: "auto",
                display: "block",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#facc6b", // ゴールド
                }}
              >
                AIFA
              </span>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#cbd5f5",
                  opacity: 0.9,
                }}
              >
                International Music Competition
              </span>
            </div>
          </div>
        </a>

        {/* Nav items */}
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "14px",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#e5e7eb",
                padding: "4px 0",
                opacity: 0.9,
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
