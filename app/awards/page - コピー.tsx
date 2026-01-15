import type { CSSProperties } from "react";

export default function AwardsPage() {
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
      "radial-gradient(circle at 0% 0%, rgba(250,204,21,0.18), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 32px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(202,138,4,0.55)",
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
      <section style={card}>
        <h1 style={title}>Awards &amp; Prizes (Draft)</h1>

        <p style={p}>
          The exact award structure may vary by edition. Below is a draft model
          for the AIFA International Music Competition.
        </p>

        <h2 style={h3}>Main Prizes</h2>
        <ul style={ul}>
          <li>
            <strong>Grand Prize</strong> &mdash; one winner selected from all
            categories (if applicable)
          </li>
          <li>
            <strong>First Prize (Gold)</strong> &mdash; top performers in each
            age group / category
          </li>
          <li>
            <strong>Second Prize (Silver)</strong>
          </li>
          <li>
            <strong>Third Prize (Bronze)</strong>
          </li>
        </ul>

        <h2 style={h3}>Special Awards (examples)</h2>
        <ul style={ul}>
          <li>Best Interpretation of Baroque Work</li>
          <li>Best Contemporary Performance</li>
          <li>Young Talent Award (for youngest outstanding participants)</li>
          <li>Teacher&apos;s Award (optional)</li>
        </ul>

        <h2 style={h3}>Form of Prizes (to be confirmed)</h2>
        <ul style={ul}>
          <li>Digital certificates (PDF) for all prize winners</li>
          <li>Optional trophies / medals for higher prizes</li>
          <li>
            Publication of results on the official website and social media
          </li>
          <li>Possible video features or highlight posts for top winners</li>
        </ul>
      </section>
    </main>
  );
}
