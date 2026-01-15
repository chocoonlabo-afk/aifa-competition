import type { CSSProperties } from "react";

export default function PaymentPage() {
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
    border: "1px solid rgba(202,138,4,0.6)",
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

  const tableWrap: CSSProperties = {
    overflowX: "auto",
    borderRadius: "12px",
    border: "1px solid rgba(202,138,4,0.7)",
    marginTop: "8px",
  };

  const table: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  };

  const th: CSSProperties = {
    padding: "9px 12px",
    textAlign: "left",
    background: "rgba(15,23,42,0.95)",
    color: "#fefce8",
    borderBottom: "1px solid rgba(55,65,81,0.9)",
  };

  const td: CSSProperties = {
    padding: "9px 12px",
    borderBottom: "1px solid rgba(31,41,55,0.85)",
    color: "#e5e7eb",
  };

  const note: CSSProperties = {
    marginTop: "10px",
    fontSize: "12px",
    color: "#fbbf24",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Fees &amp; Payment</h1>

        <p style={p}>
          For the early online edition of the AIFA International Music
          Competition, the participation fee is{" "}
          <strong>fixed at 90 USD per participant</strong>, regardless of age
          group or instrument.
        </p>

        <h2 style={h3}>Participation Fee (2026 Online Edition)</h2>
        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Age Group</th>
                <th style={th}>Fee (USD)</th>
                <th style={th}>Fee in Other Currencies</th>
                <th style={th}>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>All age groups (3&ndash;12 years)</td>
                <td style={td}>
                  <strong>90 USD</strong> per participant
                </td>
                <td style={td}>
                  Charged in USD via PayPal. The amount in JPY or other
                  currencies is calculated by PayPal at the time of payment.
                </td>
                <td style={td}>
                  One fee per participant. The fee is non-refundable except in
                  the unlikely event that the competition is cancelled.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={note}>
          The above fee applies to the 2026 online-only edition and may be
          adjusted for future editions.
        </p>

        <h2 style={h3}>Payment Method</h2>
        <p style={p}>
          We currently accept payments via <strong>PayPal</strong>.
        </p>
        <ul
          style={{
            margin: "6px 0 0 18px",
            padding: 0,
            fontSize: "14px",
            lineHeight: 1.8,
            color: "#e5e7eb",
          }}
        >
          <li>
            You can pay using a PayPal account or major credit cards through the
            PayPal checkout.
          </li>
          <li>
            Payment instructions and the payment link will be provided after you
            submit the online entry form, and will also be shown on this page
            when applications open.
          </li>
          <li>
            Your entry is considered complete only after both the{" "}
            <strong>entry form</strong> and the <strong>PayPal payment</strong>{" "}
            have been received.
          </li>
        </ul>
      </section>
    </main>
  );
}
