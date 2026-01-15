// app/footer.tsx
export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        marginTop: "60px",
        padding: "28px 20px",
        borderTop: "1px solid rgba(148,163,184,0.25)",
        background: "rgba(5,8,22,0.92)",
        color: "#cbd5f5",
        fontSize: "13px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="/legal/terms" style={{ textDecoration: "underline", color: "#fefce8" }}>Terms</a>
          <a href="/legal/privacy" style={{ textDecoration: "underline", color: "#fefce8" }}>Privacy</a>
          <a href="/legal/refund" style={{ textDecoration: "underline", color: "#fefce8" }}>Refund</a>
          <a href="/legal/media-consent" style={{ textDecoration: "underline", color: "#fefce8" }}>Media</a>
          <a href="/contact" style={{ textDecoration: "underline", color: "#fefce8" }}>Contact</a>
        </div>

        <div style={{ opacity: 0.8 }}>
          AIFA International Music Competition · © 2026
        </div>
      </div>
    </footer>
  );
}
