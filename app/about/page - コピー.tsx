import type { CSSProperties } from "react";

export default function AboutPage() {
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
      "radial-gradient(circle at 0% 0%, rgba(148,163,184,0.2), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 32px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(148,163,184,0.4)",
  };

  const title: CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 18px",
    color: "#fefce8",
  };

  const h3: CSSProperties = {
    fontSize: "16px",
    fontWeight: 600,
    margin: "20px 0 8px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const ul: CSSProperties = {
    margin: "6px 0 0 18px",
    padding: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  return (
    <main style={wrapper}>
      <article style={card}>
        <h1 style={title}>About AIFA International Music Competition</h1>

        <p style={p}>
          AIFA International Music Competition (AIFA) is an online-based
          classical music competition that aims to support young musicians
          around the world. The competition combines{" "}
          <strong>AI-supported analysis</strong> with{" "}
          <strong>experienced human jury</strong> to provide both fair
          evaluation and meaningful feedback.
        </p>

        <h2 style={h3}>Mission</h2>
        <p style={p}>
          We want to create a stage where talented players can:
        </p>
        <ul style={ul}>
          <li>Share their music internationally regardless of location</li>
          <li>Receive clear and constructive feedback</li>
          <li>Build motivation for long-term musical development</li>
        </ul>

        <h2 style={h3}>Future Vision</h2>
        <p style={p}>
          The early edition of AIFA will start as a compact online competition.
          In the future, we plan to develop:
        </p>
        <ul style={ul}>
          <li>More instrument categories</li>
          <li>Exam-style certification system</li>
          <li>Optional on-site gala events and masterclasses</li>
        </ul>

        <h2 style={h3}>Organisation</h2>
        <p style={p}>
          AIFA is organised by the AIFA International Music Competition Office.
          Detailed information about the jury members and advisory board will be
          announced on this website.
        </p>
      </article>
    </main>
  );
}
