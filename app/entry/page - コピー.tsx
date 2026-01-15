import type { CSSProperties } from "react";

export default function EntryFormPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "960px",
    background:
      "radial-gradient(circle at 0% 0%, rgba(250,204,21,0.18), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "24px 24px 32px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(202,138,4,0.55)",
  };

  const title: CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 12px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: "0 0 18px",
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const iframeStyle: CSSProperties = {
    width: "100%",
    height: "900px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#fff",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Entry Form (2026 Online Edition)</h1>
        <p style={p}>
          Please fill in the form below to apply for the AIFA International
          Music Competition. After submitting the form, you will receive
          information about the participation fee payment via PayPal.
        </p>

        <iframe
          style={iframeStyle}
          src="https://docs.google.com/forms/d/e/XXXXXXXXXXXXXXXXXXXX/viewform?embedded=true"
          title="AIFA Entry Form"
        >
          Loading…
        </iframe>
      </section>
    </main>
  );
}
