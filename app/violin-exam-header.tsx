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

  const titleBlock: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  };

  const mainTitle: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#f9fafb",
  };

  const subTitle: React.CSSProperties = {
    fontSize: 11,
    color: "#9ca3af",
    whiteSpace: "nowrap",
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

  return (
    <header style={headerStyle}>
      <div style={inner}>
        {/* 左：ロゴ画像＋タイトル文字 */}
        <div style={left}>
          <Link href="/violin-exam" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              <div style={titleBlock}>
                <div style={mainTitle}>AIFA Violin Grade Exam</div>
                <div style={subTitle}>
                  Step-by-step violin exam for young players
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* 右：ナビゲーション */}
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
