import type { CSSProperties } from "react";

export default function ApplyPage() {
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
    border: "1px solid rgba(148,163,184,0.45)",
  };

  const title: CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 18px",
    color: "#fefce8",
  };

  const stepGrid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "12px",
  };

  const stepCard: CSSProperties = {
    borderRadius: "14px",
    border: "1px solid rgba(148,163,184,0.8)",
    padding: "14px 14px 16px",
    background: "#020617",
  };

  const stepTitle: CSSProperties = {
    margin: "0 0 4px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#fefce8",
  };

  const stepText: CSSProperties = {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#e5e7eb",
  };

  const buttonRow: CSSProperties = {
    marginTop: "22px",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  };

  const primaryBtn: CSSProperties = {
    borderRadius: "999px",
    padding: "10px 22px",
    border: "none",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    background: "linear-gradient(135deg, #facc6b, #f97316)",
    color: "#0b1120",
  };

  const secondaryBtn: CSSProperties = {
    borderRadius: "999px",
    padding: "9px 20px",
    border: "1px solid rgba(148,163,184,0.8)",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background: "transparent",
    color: "#e5e7eb",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>How to Apply</h1>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#e5e7eb",
          }}
        >
          This page explains the basic flow for entering the AIFA International
          Music Competition. Details such as fees and exact dates will be
          updated closer to the opening of the 2026 edition.
        </p>

        <div style={stepGrid}>
          <div style={stepCard}>
            <h2 style={stepTitle}>Step 1 &mdash; Check Categories &amp; Rules</h2>
            <p style={stepText}>
              Read through the competition categories, age groups, and repertoire
              guidelines to confirm which group you belong to.
            </p>
          </div>

          <div style={stepCard}>
            <h2 style={stepTitle}>Step 2 &mdash; Prepare Your Video</h2>
            <p style={stepText}>
              Record your performance according to the video requirements
              (camera position, sound quality, etc.). Upload it to a video
              platform (e.g. YouTube as unlisted).
            </p>
          </div>

          <div style={stepCard}>
            <h2 style={stepTitle}>Step 3 &mdash; Submit Entry Form</h2>
            <p style={stepText}>
              Fill in the online entry form with your personal details, chosen
              category, repertoire and video link.
            </p>
          </div>

          <div style={stepCard}>
            <h2 style={stepTitle}>Step 4 &mdash; Complete the Payment</h2>
            <p style={stepText}>
              Pay the participation fee through the available payment methods.
              Your entry will be confirmed after we receive both the form and
              the fee.
            </p>
          </div>
        </div>

        <div style={buttonRow}>
          <a href="/entry">
            <button style={primaryBtn}>Go to Entry Form (draft)</button>
          </a>
          <a href="/payment">
            <button style={secondaryBtn}>View Fees &amp; Payment info</button>
          </a>
          <a href="/categories">
            <button style={secondaryBtn}>Categories &amp; Rules</button>
          </a>
        </div>
      </section>
    </main>
  );
}
