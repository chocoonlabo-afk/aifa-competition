import type { CSSProperties } from "react";

export default function GuidelinesPage() {
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
      "radial-gradient(circle at 0% 0%, rgba(148,163,184,0.2), transparent 60%), #020617",
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

  const h3: CSSProperties = {
    fontSize: "16px",
    fontWeight: 600,
    margin: "20px 0 8px",
    color: "#fefce8",
  };

  const ul: CSSProperties = {
    margin: "6px 0 0 18px",
    padding: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const p: CSSProperties = {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Competition Guidelines (Outline)</h1>
        <p style={p}>
          This page will contain the official guidelines and terms for each
          edition of the AIFA International Music Competition. The items below
          show the planned structure.
        </p>

        <h2 style={h3}>1. Eligibility</h2>
        <ul style={ul}>
          <li>Age limits and eligible instruments</li>
          <li>Rules for multiple entries and categories</li>
        </ul>

        <h2 style={h3}>2. Repertoire &amp; Performance</h2>
        <ul style={ul}>
          <li>Allowed repertoire types and length</li>
          <li>Use of accompaniment and scores</li>
        </ul>

        <h2 style={h3}>3. Video Recording Rules</h2>
        <ul style={ul}>
          <li>Camera position, framing, and lighting</li>
          <li>Audio quality Requirements</li>
          <li>Editing and cuts (if allowed or not)</li>
        </ul>

        <h2 style={h3}>4. Fees, Payment &amp; Refund Policy</h2>
        <ul style={ul}>
          <li>Fee per category and currency</li>
          <li>Payment deadlines</li>
          <li>Refund / cancellation policy</li>
        </ul>

        <h2 style={h3}>5. Results, Certificates &amp; Use of Recordings</h2>
        <ul style={ul}>
          <li>How results are announced</li>
          <li>Issuing of certificates and possible awards</li>
          <li>
            Conditions for using participant videos on the official website or
            social media
          </li>
        </ul>
      </section>
    </main>
  );
}
