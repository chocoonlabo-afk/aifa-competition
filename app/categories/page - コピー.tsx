import type { CSSProperties } from "react";

export default function CategoriesPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "1000px",
    background:
      "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.22), transparent 60%), #020617",
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

  const h3: CSSProperties = {
    fontSize: "16px",
    fontWeight: 600,
    margin: "24px 0 10px",
    color: "#fefce8",
  };

  const tableWrap: CSSProperties = {
    overflowX: "auto",
    borderRadius: "12px",
    border: "1px solid rgba(148,163,184,0.6)",
  };

  const table: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  };

  const th: CSSProperties = {
    padding: "10px 12px",
    textAlign: "left",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    borderBottom: "1px solid rgba(55,65,81,0.9)",
    whiteSpace: "nowrap",
  };

  const td: CSSProperties = {
    padding: "9px 12px",
    borderBottom: "1px solid rgba(31,41,55,0.85)",
    color: "#e5e7eb",
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
        <h1 style={title}>Categories &amp; Rules (Outline)</h1>

        <p style={p}>
          The exact details for each edition will be published in the official
          announcement. The following is the basic structure planned for AIFA.
        </p>

        <h2 style={h3}>Instrument Categories (planned)</h2>
        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Category</th>
                <th style={th}>Instrument</th>
                <th style={th}>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Strings A</td>
                <td style={td}>Violin</td>
                <td style={td}>Solo with or without accompaniment</td>
              </tr>
              <tr>
                <td style={td}>Strings B</td>
                <td style={td}>Cello</td>
                <td style={td}>Solo with or without accompaniment</td>
              </tr>
              <tr>
                <td style={td}>Piano</td>
                <td style={td}>Piano</td>
                <td style={td}>Solo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={h3}>Age Groups (example)</h2>
        <ul style={ul}>
          <li>Group A: approx. 5–7 years</li>
          <li>Group B: approx. 8–10 years</li>
          <li>Group C: approx. 11–13 years</li>
          <li>Group D: approx. 14–18 years</li>
        </ul>

        <h2 style={h3}>Repertoire &amp; Video Rules (to be finalised)</h2>
        <ul style={ul}>
          <li>
            One free-choice piece (or movement) suitable for the participant&apos;s
            level
          </li>
          <li>Recommended playing time: to be announced by age group</li>
          <li>
            Video recording requirements: camera position, lighting, and sound
            quality guidelines will be listed here
          </li>
        </ul>

        <h2 style={h3}>General Rules (outline)</h2>
        <ul style={ul}>
          <li>Participants may enter more than one category if eligible.</li>
          <li>
            All decisions of the jury are final. The jury reserves the right not
            to award certain prizes.
          </li>
          <li>
            By submitting a video, participants agree to the competition
            guidelines and privacy policy.
          </li>
        </ul>
      </section>
    </main>
  );
}
