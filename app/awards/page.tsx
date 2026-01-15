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
    margin: "22px 0 10px",
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

  const tableWrap: CSSProperties = {
    overflowX: "auto",
    borderRadius: "12px",
    border: "1px solid rgba(202,138,4,0.55)",
    marginTop: "8px",
  };

  const table: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  };

  const th: CSSProperties = {
    padding: "10px 12px",
    textAlign: "left",
    background: "rgba(15,23,42,0.95)",
    color: "#fefce8",
    borderBottom: "1px solid rgba(55,65,81,0.9)",
    whiteSpace: "nowrap",
  };

  const td: CSSProperties = {
    padding: "9px 12px",
    borderBottom: "1px solid rgba(31,41,55,0.85)",
    color: "#e5e7eb",
    verticalAlign: "top",
  };

  const note: CSSProperties = {
    marginTop: "6px",
    fontSize: "12px",
    color: "#fbbf24",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Awards &amp; Evaluation</h1>

        <p style={p}>
          AIFA International Music Competition uses a{" "}
          <strong>100-point scoring system</strong>. Prizes are awarded based on
          the score and the overall impression of the performance. The jury may
          use AI-supported analysis as a reference, but final decisions are made
          by experienced musicians.
        </p>

        {/* Scoring system */}
        <h2 style={h3}>Prize Levels &amp; Score Guidelines</h2>
        <p style={p}>
          The following table shows the basic score guidelines for each prize.
          Scores indicate the <strong>approximate range</strong> for each award.
        </p>

        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Prize</th>
                <th style={th}>Score guideline</th>
                <th style={th}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>
                  <strong>Grand Prix</strong>
                </td>
                <td style={td}>99 &ndash; 100 points</td>
                <td style={td}>
                  Exceptional artistry and technical mastery. Awarded at the
                  jury&apos;s discretion to an outstanding performer among all
                  participants.
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <strong>1st Prize</strong>
                </td>
                <td style={td}>93 &ndash; 100 points</td>
                <td style={td}>
                  Excellent performance with strong musical expression and very
                  high technical level.
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <strong>2nd Prize</strong>
                </td>
                <td style={td}>86 &ndash; 100 points</td>
                <td style={td}>
                  Very good performance with solid technique and clear musical
                  ideas.
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <strong>3rd Prize</strong>
                </td>
                <td style={td}>79 &ndash; 100 points</td>
                <td style={td}>
                  Good performance that shows musical potential and developing
                  technique.
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <strong>Encouragement Award</strong>
                </td>
                <td style={td}>55 &ndash; 100 points</td>
                <td style={td}>
                  Awarded to participants who show promise and steady progress.
                  The aim is to encourage further study and performance.
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <strong>Future Award</strong>
                </td>
                <td style={td}>below 55 points</td>
                <td style={td}>
                  For young musicians at an early stage of study. Focuses on
                  future potential rather than the current score.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={note}>
          Multiple participants may receive the same prize. If no performance
          reaches the required level, a prize may be left vacant.
        </p>

        {/* What winners receive */}
        <h2 style={h3}>What Prize Winners Receive</h2>
        <ul style={ul}>
          <li>
            <strong>Digital certificate (PDF)</strong> for all prize winners,
            indicating the prize and score.
          </li>
          <li>
            <strong>Written feedback (PDF)</strong> from the jury for all prize
            winners, focusing on strengths and suggestions for the next step.
          </li>
          <li>
            Publication of names and basic results on the official website and
            AIFA social media channels.
          </li>
          <li>
            For top prize winners (Grand Prix / 1st Prize and selected other
            prizes), there may be{" "}
            <strong>video features or highlight posts</strong> on official
            channels.
          </li>
        </ul>

        {/* Optional physical awards */}
        <h2 style={h3}>Optional Physical Awards</h2>
        <p style={p}>
          In addition to digital certificates, selected prize winners will have
          the option to purchase:
        </p>
        <ul style={ul}>
          <li>Customised trophies (design to be announced)</li>
          <li>Medals or printed certificates for display</li>
        </ul>
        <p style={p}>
          Details about designs, prices and international shipping will be
          announced on this page and by email to eligible participants. These
          items are <strong>optional</strong> and not required to receive the
          prize itself.
        </p>

        {/* Educational focus */}
        <h2 style={h3}>Educational Focus</h2>
        <p style={p}>
          AIFA is designed not only to give prizes, but also to support each
          child&apos;s long-term musical growth. Scores, written feedback, and
          certificates are intended to help participants and teachers plan the
          next steps in their musical journey.
        </p>
      </section>
    </main>
  );
}
