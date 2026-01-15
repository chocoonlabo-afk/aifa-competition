import type { CSSProperties } from "react";

export default function ContactPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "700px",
    background:
      "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.2), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 32px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(148,163,184,0.5)",
    textAlign: "center",
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

  const button: CSSProperties = {
    display: "inline-block",
    marginTop: "22px",
    padding: "12px 22px",
    fontSize: "15px",
    fontWeight: 600,
    borderRadius: "12px",
    background: "#facc15",
    color: "#1c1917",
    textDecoration: "none",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Contact — AIFA International Music Competition</h1>

        <p style={p}>
          For any questions regarding the competition, please use the contact
          form below. We will respond as soon as possible.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdeWR8Zs7KYDToiL8tCMcXTPZ-f-VvxULfb9Jg1YGG-ScVzbA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={button}
        >
          Open Contact Form
        </a>
      </section>
    </main>
  );
}
