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
      "radial-gradient(circle at 0% 0%, rgba(250,204,21,0.18), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 36px",
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
    fontSize: "18px",
    fontWeight: 600,
    margin: "24px 0 12px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const stepsWrap: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "18px",
  };

  const stepCard: CSSProperties = {
    border: "1px solid rgba(202,138,4,0.55)",
    borderRadius: "14px",
    padding: "18px 18px 20px",
    background: "rgba(15,23,42,0.6)",
  };

  const stepTitle: CSSProperties = {
    margin: "0 0 8px",
    fontWeight: 600,
    color: "#fefce8",
    fontSize: "15px",
  };

  const btnWrap: CSSProperties = {
    marginTop: "26px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  };

  const btn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    padding: "10px 22px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    border: "1px solid rgba(202,138,4,0.55)",
    color: "#fefce8",
    background: "rgba(15,23,42,0.85)",
    textDecoration: "none",
  };

  const primaryBtn: CSSProperties = {
    ...btn,
    background:
      "linear-gradient(90deg, rgba(250,204,21,0.9), rgba(245,158,11,0.9))",
    color: "#1c1917",
    border: "none",
  };

  const note: CSSProperties = {
    marginTop: "14px",
    fontSize: "12px",
    color: "#fbbf24",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>How to Apply</h1>
        <p style={p}>
          The AIFA International Music Competition will open applications for
          the 2026 edition soon. Please follow the steps below to prepare your
          application.
        </p>

        {/* Application dates */}
        <h2 style={h3}>Application Schedule (2026 Edition)</h2>
        <p style={p}>
          <strong>Entry period:</strong> January 30 — April 1 (based on
          international time zones)
          <br />
          <strong>Results announcement:</strong> around May 10 (subject to minor
          adjustments; any delays will be announced on this website)
        </p>

        {/* Steps */}
        <h2 style={h3}>Application Steps</h2>
        <div style={stepsWrap}>
          <div style={stepCard}>
            <h3 style={stepTitle}>Step 1 — Check Categories &amp; Rules</h3>
            <p style={p}>
              Review age groups, repertoire, and video guidelines to confirm
              your category.
            </p>
          </div>

          <div style={stepCard}>
            <h3 style={stepTitle}>Step 2 — Prepare Your Video</h3>
            <p style={p}>
              Record your performance and upload it to YouTube as{" "}
              <strong>Unlisted</strong>. Editing, audio replacement, or effects
              are not allowed.
            </p>
          </div>

          <div style={stepCard}>
            <h3 style={stepTitle}>Step 3 — Submit Entry Form</h3>
            <p style={p}>
              Complete the online form with your details, repertoire, and video
              link. For minors, a parent or guardian must provide consent for
              participation.
            </p>
          </div>

          <div style={stepCard}>
            <h3 style={stepTitle}>Step 4 — Pay the Participation Fee</h3>
            <p style={p}>
              Pay securely via <strong>PayPal</strong>. Your entry is confirmed
              once both the form and payment are received.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={btnWrap}>
          <a style={primaryBtn} href="#">
            Go to Entry Form (coming soon)
          </a>
          <a style={btn} href="/payment">
            View Fees &amp; Payment Info
          </a>
          <a style={btn} href="/categories">
            Categories &amp; Rules
          </a>
        </div>

        <p style={note}>
          Detailed information and the final entry form will be published closer
          to the opening date.
        </p>
      </section>
    </main>
  );
}
