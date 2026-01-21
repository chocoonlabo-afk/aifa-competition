// app/violin-exam-header.tsx
import Link from "next/link";

export default function ViolinExamHeader() {
  const headerStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 40,
    backdropFilter: "blur(16px)",
    background: "linear-gradient(90deg, rgba(5,8,22,0.96), rgba(15,23,42,0.96))",
    borderBottom: "1px solid rgba(15,23,42,1)",
  };

  const inner: React.CSSProperties = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  };

  const left: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    minWidth: 0,
  };

  const nav: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 18,
    fontSize: 13,
  };

  const navLink: React.CSSProperties = {
    color: "#e5e7eb",
    textDecoration: "none",
    fontWeight: 500,
    opacity: 0.9,
  };

  const navLinkSmall: React.CSSProperties = {
    ...navLink,
    fontSize: 11,
    textTransform: "uppercase" as const,
    letterSpacing: "0.16em",
    color: "#9ca3af",
  };

  const applyButton: React.CSSProperties = {
    padding: "8px 18px",
    borderRadius: 9999,
    border: "none",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600,
    background:
      "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #fde68a 100%)",
    color: "#020617",
    boxShadow: "0 10px 25px rgba(245,158,11,0.4)",
  };

  return (
    <header style={headerStyle}>
      <div style={inner}>
        <div style={left}>
          <Link href="/violin-exam" style={{ textDecoration: "none" }}>
            <img
              src="/aifa-violin-exam-logo.png"
              alt="AIFA Violin Exam Logo"
              style={{
                height: "54px",
                width: "auto",
                display: "block",
                filter: "drop-shadow(0 0 6px rgba(255,220,140,0.35))",
              }}
            />
          </Link>
        </div>

        <nav style={nav}>
          <Link href="/violin-exam/syllabus" style={navLink}>
            Syllabus
          </Link>
          <Link href="/violin-exam/free-downloads" style={navLink}>
            Free Sheets
          </Link>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            style={navLinkSmall}
          >
            Competition site
          </a>
        </nav>
      </div>
    </header>
  );
}
