import type { CSSProperties } from "react";

export default function AiEvaluationPage() {
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
      "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 60%), #020617",
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
        <h1 style={title}>AI-supported Evaluation (Concept)</h1>

        <p style={p}>
          AIFA plans to introduce AI-supported evaluation as a{" "}
          <strong>supporting tool</strong> for the human jury. The aim is not to
          replace musical judgement, but to provide additional, objective data
          that can help both judges and participants.
        </p>

        <h2 style={h3}>What AI will focus on</h2>
        <ul style={ul}>
          <li>Pitch stability and intonation tendencies</li>
          <li>Rhythm and tempo consistency</li>
          <li>Basic balance of dynamics over the piece</li>
        </ul>

        <h2 style={h3}>What stays in human hands</h2>
        <ul style={ul}>
          <li>Musicality, phrasing, and character</li>
          <li>Sound quality and tone colour</li>
          <li>Artistic individuality and interpretation</li>
        </ul>

        <h2 style={h3}>Feedback for participants (planned)</h2>
        <p style={p}>
          For selected categories, we plan to provide a simple feedback sheet
          that combines:
        </p>
        <ul style={ul}>
          <li>Short written comments from the jury</li>
          <li>
            Basic numerical indicators from AI analysis (e.g. intonation
            stability index)
          </li>
        </ul>

        <h2 style={h3}>Data &amp; Privacy</h2>
        <p style={p}>
          Details about how participant videos are processed and stored will be
          described in the guidelines and privacy policy. We will only use
          submitted recordings for competition-related evaluation and
          communication, unless explicit permission is given for other uses.
        </p>
      </article>
    </main>
  );
}
