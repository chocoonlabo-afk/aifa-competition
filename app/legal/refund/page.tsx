// app/legal/refund/page.tsx
"use client";

import type { CSSProperties } from "react";

export default function RefundPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    background: "#020617", // dark background
    color: "#f8fafc",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "880px",
    padding: "4px 4px 40px",
  };

  const h1: CSSProperties = {
    fontSize: "28px",
    fontWeight: 700,
    margin: "0 0 6px",
    color: "#fefce8",
  };

  const subtitle: CSSProperties = {
    fontSize: "13px",
    margin: 0,
    color: "#fbbf24",
  };

  const hr: CSSProperties = {
    height: "1px",
    background: "rgba(202,138,4,0.45)",
    border: "none",
    margin: "22px 0 28px",
  };

  const sectionTitle: CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
    margin: "30px 0 10px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: "0 0 12px",
    fontSize: "15px",
    lineHeight: 1.7,
  };

  const list: CSSProperties = {
    margin: "0 0 12px 18px",
    fontSize: "15px",
    lineHeight: 1.7,
  };

  const address: CSSProperties = {
    margin: "6px 0 14px",
    fontSize: "15px",
    lineHeight: 1.65,
  };

  const copyright: CSSProperties = {
    marginTop: "40px",
    fontSize: "13px",
    opacity: 0.75,
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={h1}>AIFA International Music Competition – Refund Policy</h1>
        <p style={subtitle}>Last updated: January 2026</p>
        <hr style={hr} />

        {/* 1. General Rule: No Refunds */}
        <h2 style={sectionTitle}>1. General Rule: No Refunds</h2>
        <p style={p}>
          This Refund Policy explains when entry fees and other payments may or
          may not be refunded. It forms part of the Terms &amp; Conditions of
          the AIFA International Music Competition (&quot;AIFA&quot;,
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
        </p>
        <p style={p}>
          <strong>All entry fees are strictly non-refundable</strong> once
          payment has been completed, except in clearly defined exceptional
          cases described in this Policy or where required by applicable law.
        </p>
        <p style={p}>Entry fees will not be refunded in cases including:</p>
        <ul style={list}>
          <li>withdrawal by the Participant after payment,</li>
          <li>
            failure to submit the required performance video or entry materials,
          </li>
          <li>illness, scheduling conflicts, or other personal reasons,</li>
          <li>disagreement with adjudication or results.</li>
        </ul>
        <p style={p}>
          This no-refund rule applies to all entry categories and administrative
          fees related to participation in the Competition.
        </p>

        {/* 2. Optional Purchases (Trophies and Other Items) */}
        <h2 style={sectionTitle}>
          2. Optional Purchases (Trophies and Other Items)
        </h2>
        <p style={p}>
          Fees for optional purchases, such as trophies, medals, or other
          physical items (&quot;Physical Items&quot;), are also{" "}
          <strong>non-refundable</strong> once the order has been placed.
        </p>
        <p style={p}>AIFA is not responsible for:</p>
        <ul style={list}>
          <li>delays in delivery caused by postal or courier services,</li>
          <li>loss or damage during shipment,</li>
          <li>customs inspections or import restrictions,</li>
          <li>incorrect or incomplete delivery addresses provided by recipients.</li>
        </ul>
        <p style={p}>
          Customs duties, taxes, and any other import-related fees are the sole
          responsibility of the recipient.
        </p>

        {/* 3. Duplicate Payments and Technical Errors */}
        <h2 style={sectionTitle}>3. Duplicate Payments and Technical Errors</h2>
        <p style={p}>
          In the event of a clear <strong>duplicate payment</strong> (for
          example, if the same entry is accidentally paid twice), AIFA may, at
          its discretion, arrange a partial or full refund or issue a credit for
          a future edition, after verifying:
        </p>
        <ul style={list}>
          <li>that a duplicate transaction has occurred,</li>
          <li>the payer&apos;s identity, and</li>
          <li>that no corresponding additional services were provided.</li>
        </ul>
        <p style={p}>
          Where a payment fails due to a technical issue but funds were captured
          by the payment provider, we will cooperate with the payment provider
          (e.g., PayPal) to resolve the issue. In some cases, the payment
          provider may process the refund directly according to its own
          policies.
        </p>
        <p style={p}>
          Participants should contact AIFA promptly with evidence of any
          duplicate or erroneous payment, including transaction IDs and
          receipts.
        </p>

        {/* 4. Competition Changes or Cancellation */}
        <h2 style={sectionTitle}>4. Competition Changes or Cancellation</h2>
        <p style={p}>
          AIFA reserves the right to change the format, schedule, or other
          aspects of the Competition where reasonably necessary, for example due
          to technical, logistical, or safety considerations.
        </p>
        <p style={p}>
          In the unlikely event that an entire edition of the Competition is{" "}
          <strong>fully cancelled by AIFA</strong> without a replacement or
          alternative arrangement:
        </p>
        <ul style={list}>
          <li>
            AIFA may, at its sole discretion, offer refunds, partial refunds, or
            credits toward future editions.
          </li>
        </ul>
        <p style={p}>
          AIFA is not responsible for any additional costs incurred by
          Participants, such as:
        </p>
        <ul style={list}>
          <li>instrument or studio rental,</li>
          <li>recording or editing costs,</li>
          <li>travel or accommodation,</li>
          <li>other third-party services and expenses.</li>
        </ul>

        {/* 5. Chargebacks and Disputes */}
        <h2 style={sectionTitle}>5. Chargebacks and Disputes</h2>
        <p style={p}>
          If a Participant initiates a chargeback or payment dispute through a
          bank or payment provider without first contacting AIFA, we reserve the
          right to:
        </p>
        <ul style={list}>
          <li>
            provide evidence of the transaction and these Terms &amp; Conditions
            to the payment provider, and
          </li>
          <li>treat such action as a breach of our Terms.</li>
        </ul>
        <p style={p}>
          Successful participation in the Competition (including adjudication
          and results) is conditional upon fees being validly paid and not
          reversed. AIFA may:
        </p>
        <ul style={list}>
          <li>disqualify a Participant, and/or</li>
          <li>revoke awards if a payment is reversed or deemed fraudulent.</li>
        </ul>

        {/* 6. Contact for Payment Issues */}
        <h2 style={sectionTitle}>6. Contact for Payment Issues</h2>
        <p style={p}>
          If you believe a payment has been made in error or you have questions
          about this Refund Policy, please contact:
        </p>
        <p style={address}>
          <strong>AIFA Competition Office (ChocoOnLabo)</strong>
          <br />
          〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階
          <br />
          Email: <strong>chocoonlabo@gmail.com</strong>
        </p>
        <p style={p}>
          We will review your inquiry and respond as soon as reasonably
          possible. However, please note that the general rule of{" "}
          <strong>no refunds</strong> remains applicable except in clearly
          defined exceptional cases as described above.
        </p>

        <footer style={copyright}>
          © 2026 AIFA International Music Competition
        </footer>
      </section>
    </main>
  );
}
