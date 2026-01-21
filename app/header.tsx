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
  // 共通ナビリンク
  const navLink = {
    textDecoration: "none",
    color: "#e5e7eb",
    padding: "4px 0",
    opacity: 0.9,
  } as const;

  // 検定ヘッダーと同じ Apply ボタン風
  const applyButton = {
    padding: "8px 18px",
    borderRadius: 9999,
    border: "none",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 600,
    background:
      "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #fde68a 100%)",
    color: "#020617",
    boxShadow: "0 10px 25px rgba(245,158,11,0.4)",
  } as const;

  // Competition site と同デザインの小さなリンク
  const navLinkSmall = {
    ...navLink,
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.16em",
    color: "#9ca3af",
    padding: "4px 4px",
  } as const;

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
                  color: "#facc6b", // gold
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

        {/* Nav */}
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
          {navItems.map((item) => {
            const isApply = item.label === "Apply";
            return (
              <a
                key={item.href}
                href={item.href}
                style={isApply ? applyButton : navLink}
              >
                {item.label}
              </a>
            );
          })}

          {/* 小さな検定サイトリンク（別タブ） */}
          <a
            href="/violin-exam"
            target="_blank"
            rel="noreferrer"
            style={navLinkSmall}
          >
            Violin Exam
          </a>
        </nav>
      </div>
    </header>
  );
}
