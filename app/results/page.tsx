import type { CSSProperties } from "react";

export default function ResultsPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "900px",
    background:
      "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.2), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 32px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(148,163,184,0.45)",
  };

  const title: CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 18px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const yearBlock: CSSProperties = {
    marginTop: "20px",
    padding: "16px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(148,163,184,0.7)",
    background: "#020617",
  };

  const yearTitle: CSSProperties = {
    margin: "0 0 6px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#fefce8",
  };

  const small: CSSProperties = {
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: "6px",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Winners &amp; Results</h1>

        <p style={p}>
          This page will list prize winners and selected performances for each
          edition of the AIFA International Music Competition.
        </p>

        <div style={yearBlock}>
          <h2 style={yearTitle}>2026 &mdash; Early Start Model</h2>
          <p style={p}>
            The 2026 edition is currently in preparation. Once the competition
            has finished, prize winners will be announced here.
          </p>
          <p style={small}>
            After publication, you will find a breakdown by category and age
            group, plus links to selected performance videos (where available).
          </p>
        </div>
      </section>
    </main>
  );
}
