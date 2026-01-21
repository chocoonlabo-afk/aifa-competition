// app/violin-exam/fees/page.tsx
import React from "react";
import Link from "next/link";

export default function ViolinExamFeesPage() {
  const pageWrapper: React.CSSProperties = {
    minHeight: "100vh",
    padding: "40px 16px 60px",
    boxSizing: "border-box",
  };

  const container: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const badge: React.CSSProperties = {
    fontSize: "11px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#fbbf24",
  };

  const h1: React.CSSProperties = {
    fontSize: "26px",
    fontWeight: 800,
    margin: "8px 0 12px",
  };

  const paragraph: React.CSSProperties = {
    fontSize: "14px",
    lineHeight: 1.7,
    margin: "6px 0",
    color: "#e5e7eb",
  };

  const subtle: React.CSSProperties = {
    fontSize: "12px",
    color: "#9ca3af",
    marginTop: 6,
  };

  const section: React.CSSProperties = {
    marginTop: 32,
    paddingTop: 24,
    borderTop: "1px solid #111827",
  };

  const h2: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: 8,
  };

  const h3: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: 700,
    marginTop: 18,
    marginBottom: 6,
  };

  const table: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
    marginTop: 10,
    color: "#e5e7eb",
  };

  const th: React.CSSProperties = {
    textAlign: "left",
    padding: "8px 10px",
    borderBottom: "1px solid #1f2937",
    color: "#9ca3af",
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  };

  const td: React.CSSProperties = {
    padding: "8px 10px",
    borderBottom: "1px solid #111827",
    verticalAlign: "top",
  };

  const highlightRow: React.CSSProperties = {
    background: "rgba(15,23,42,0.85)",
  };

  const noteBox: React.CSSProperties = {
    borderRadius: 18,
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.9)",
    padding: "12px 16px",
    marginTop: 12,
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#e5e7eb",
  };

  const smallLabel: React.CSSProperties = {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#9ca3af",
    marginBottom: 4,
  };

  const list: React.CSSProperties = {
    margin: "6px 0 0 18px",
    padding: 0,
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#e5e7eb",
  };

  const timelineGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0,1fr))",
    gap: 16,
    marginTop: 12,
  };

  const timelineCard: React.CSSProperties = {
    borderRadius: 18,
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.9)",
    padding: "10px 12px",
    fontSize: "13px",
  };

  const timelineTitle: React.CSSProperties = {
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: 4,
  };

  const buttonsRow: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 20,
  };

  const primaryButton: React.CSSProperties = {
    borderRadius: 9999,
    padding: "9px 22px",
    fontSize: "13px",
    fontWeight: 600,
    color: "#020617",
    textDecoration: "none",
    background:
      "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #fde68a 100%)",
    boxShadow: "0 10px 25px rgba(245, 158, 11, 0.35)",
  };

  const secondaryButton: React.CSSProperties = {
    borderRadius: 9999,
    padding: "9px 20px",
    fontSize: "12px",
    fontWeight: 600,
    color: "#e5e7eb",
    textDecoration: "none",
    border: "1px solid #6b7280",
  };

  return (
    <div style={pageWrapper}>
      <div style={container}>
        {/* Hero */}
        <section>
          <div style={badge}>Fees &amp; Schedule</div>
          <h1 style={h1}>Violin Grade Exam — Fees &amp; Schedule (draft)</h1>
          <p style={paragraph}>
            This page shows a draft of the fee structure and schedule for the
            AIFA Violin Grade Exam. The final amounts and dates for each session
            will be confirmed when we officially announce that edition.
          </p>
          <p style={subtle}>
            All amounts below are examples in USD. Exchange rates and local bank
            or PayPal fees may affect the final amount you pay in your local
            currency.
          </p>

          <div style={buttonsRow}>
            <Link href="/violin-exam/apply" style={primaryButton}>
              Go to Apply page
            </Link>
            <Link href="/violin-exam/syllabus" style={secondaryButton}>
              View levels &amp; syllabus
            </Link>
          </div>
        </section>

        {/* Fees table */}
        <section style={section}>
          <h2 style={h2}>Example fee structure</h2>
          <p style={paragraph}>
            The exam fee is calculated from a base amount plus possible
            discounts. Each participant pays per exam / per grade. Discounts can
            usually be combined up to a certain limit (to be decided for the
            official rules).
          </p>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Item</th>
                <th style={th}>Example</th>
                <th style={th}>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={highlightRow}>
                <td style={td}>Base fee</td>
                <td style={td}>110 USD</td>
                <td style={td}>
                  Standard fee per exam, per participant. Applied to all
                  applicants.
                </td>
              </tr>
              <tr>
                <td style={td}>Early-bird discount</td>
                <td style={td}>−20 USD</td>
                <td style={td}>
                  For applications completed before the early-bird deadline.
                </td>
              </tr>
              <tr>
                <td style={td}>Previous AIFA prize winner</td>
                <td style={td}>−5 USD</td>
                <td style={td}>
                  If the participant received 1st–3rd prize in a previous AIFA
                  competition (any instrument).
                </td>
              </tr>
              <tr>
                <td style={td}>Other competition 1st prize</td>
                <td style={td}>−5 USD</td>
                <td style={td}>
                  For participants who can show proof of a 1st prize in another
                  recognised competition.
                </td>
              </tr>
              <tr>
                <td style={td}>Teacher recommendation discount</td>
                <td style={td}>−5 USD</td>
                <td style={td}>
                  Optional discount if the teacher is actively involved and
                  submits several students (details to be decided).
                </td>
              </tr>
            </tbody>
          </table>

          <div style={noteBox}>
            <div style={smallLabel}>Example calculation</div>
            <p>
              A participant who applies before the early-bird deadline and is
              also a previous AIFA prize winner would pay:
              <br />
              <strong>110 − 20 − 5 = 85 USD</strong> for one exam.
            </p>
            <p style={{ ...subtle, marginTop: 6 }}>
              The exact rules about how many discounts can be combined (and
              which documents are needed as proof) will be confirmed in the
              official terms.
            </p>
          </div>
        </section>

        {/* Schedule */}
        <section style={section}>
          <h2 style={h2}>Example schedule for one session</h2>
          <p style={paragraph}>
            The Violin Grade Exam is planned as a fully online session with a
            clear time frame for applications, payments, and video submissions.
            Below is a draft timeline.
          </p>

          <div style={timelineGrid}>
            <div style={timelineCard}>
              <div style={smallLabel}>Entry period</div>
              <div style={timelineTitle}>1 March – 31 March (UTC)</div>
              <p style={paragraph}>
                Participants submit the entry form, complete payment, and
                prepare for recording. Video submission may be allowed anytime
                during this period.
              </p>
            </div>
            <div style={timelineCard}>
              <div style={smallLabel}>Early-bird deadline</div>
              <div style={timelineTitle}>Around 1 week before closing</div>
              <p style={paragraph}>
                Applications completed before this date are eligible for the
                early-bird discount.
              </p>
            </div>
            <div style={timelineCard}>
              <div style={smallLabel}>Evaluation period</div>
              <div style={timelineTitle}>Approx. 3–4 weeks</div>
              <p style={paragraph}>
                After the final deadline, our panel reviews all videos and
                prepares score sheets, radar charts, and certificates.
              </p>
            </div>
          </div>

          <h3 style={h3}>Results announcement</h3>
          <p style={paragraph}>
            Results are planned to be sent by e-mail around 3–4 weeks after the
            closing date. Each participant receives:
          </p>
          <ul style={list}>
            <li>Pass / not yet pass decision for the chosen grade</li>
            <li>Score sheet (PDF) with category scores</li>
            <li>Radar chart visualising strengths and points to work on</li>
            <li>
              Written comments focusing on musical and technical development
            </li>
            <li>Digital certificate (PDF) if the grade is passed</li>
          </ul>
        </section>

        {/* Payment notes */}
        <section style={section}>
          <h2 style={h2}>Payment method (draft)</h2>
          <p style={paragraph}>
            The pilot edition of the Violin Grade Exam is planned to use PayPal
            for international payments. Details may change depending on
            technical and legal requirements.
          </p>
          <ul style={list}>
            <li>Payment via PayPal account or credit / debit card</li>
            <li>
              All fees are generally charged in USD. Your card company or bank
              will convert from your local currency.
            </li>
            <li>
              Transaction fees charged by PayPal or your bank are not included
              in the exam fee and are the participant&apos;s responsibility.
            </li>
          </ul>

          <div style={noteBox}>
            <div style={smallLabel}>No refund policy (planned)</div>
            <p>
              Because exam preparation and evaluation require time and staff,
              the fee is generally{" "}
              <span style={{ fontWeight: 600 }}>non-refundable</span> once the
              application is accepted, except in cases where we have to cancel a
              session for organisational reasons. The final policy will be
              written clearly in the official terms &amp; conditions.
            </p>
          </div>
        </section>

        {/* Links */}
        <section style={section}>
          <h2 style={h2}>Next steps</h2>
          <p style={paragraph}>
            When the official session is announced, this page will be updated
            with the final fees and dates. Until then, you can use these
            examples to imagine the general structure and to plan your budget.
          </p>

          <div style={buttonsRow}>
            <Link href="/violin-exam/apply" style={primaryButton}>
              Go to Apply page
            </Link>
            <Link href="/violin-exam/faq" style={secondaryButton}>
              Read Violin Exam FAQ
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
