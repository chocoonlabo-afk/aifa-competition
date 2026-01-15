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

  const infoBox: CSSProperties = {
    marginTop: "14px",
    padding: "14px 16px",
    borderRadius: "14px",
    background: "#020617",
    border: "1px solid rgba(148,163,184,0.7)",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Contact</h1>
        <p style={p}>
          For questions regarding categories, repertoire, fees or technical
          issues, please contact the competition office by e-mail. We will
          normally respond within a few business days.
        </p>

        <div style={infoBox}>
          <p style={p}>
            E-mail:{" "}
            <a
              href="mailto:info@aifa-competition.example"
              style={{ color: "#facc6b", textDecoration: "none" }}
            >
              info@aifa-competition.example
            </a>
          </p>
          <p
            style={{
              ...p,
              fontSize: "12px",
              marginTop: "6px",
              color: "#9ca3af",
            }}
          >
            (Please replace this address with your real contact e-mail.)
          </p>
        </div>

        <p
          style={{
            ...p,
            marginTop: "16px",
            fontSize: "13px",
            color: "#cbd5f5",
          }}
        >
          An online contact form can also be added here later, once the backend
          for handling inquiries is ready.
        </p>
      </section>
    </main>
  );
}
