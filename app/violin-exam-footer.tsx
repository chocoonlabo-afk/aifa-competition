// app/violin-exam-footer.tsx
import Link from "next/link";

export default function ViolinExamFooter() {
  const footer: React.CSSProperties = {
    borderTop: "1px solid #111827",
    background: "radial-gradient(circle at top, #111827 0%, #050816 55%, #020617 100%)",
    marginTop: 40,
  };

  const inner: React.CSSProperties = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "18px 16px 26px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    fontSize: 12,
    color: "#9ca3af",
  };

  const topRow: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
  };

  const brand: React.CSSProperties = {
    fontSize: 12,
    color: "#e5e7eb",
  };

  const navRow: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
  };

  const linkStyle: React.CSSProperties = {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: 12,
  };

  const small: React.CSSProperties = {
    fontSize: 11,
    color: "#6b7280",
  };

  return (
    <footer style={footer}>
      <div style={inner}>
        <div style={topRow}>
          <div style={brand}>
            <strong>AIFA Violin Grade Exam</strong>{" "}
            <span style={{ color: "#6b7280" }}>— Online violin exam project</span>
          </div>
          <div style={navRow}>
            <Link href="/violin-exam" style={linkStyle}>
              Exam top
            </Link>
            <Link href="/violin-exam/syllabus" style={linkStyle}>
              Syllabus
            </Link>
           {/* <Link href="/violin-exam/fees" style={linkStyle}>
              Fees
            </Link>
            <Link href="/violin-exam/faq" style={linkStyle}>
              FAQ
            </Link>
            <Link href="/violin-exam/apply" style={linkStyle}>
              Apply
            </Link>*/}
            {/* コンペ側へのリンク（別タブ） */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              AIFA Competition
            </a>
          </div>
        </div>

        <div style={small}>
          © {new Date().getFullYear()} AIFA / ChocoOnLabo. All rights reserved. Design aligned
          with the AIFA International Music Competition website.
        </div>
      </div>
    </footer>
  );
}
