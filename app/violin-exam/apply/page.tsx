// app/violin-exam/apply/page.tsx
import React from "react";
import Link from "next/link";

export default function ViolinExamApplyPage() {
  const pageWrapper: React.CSSProperties = {
    minHeight: "100vh",
    padding: "40px 16px 60px",
    boxSizing: "border-box",
  };

  const container: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const h1: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: 800,
    margin: "8px 0 12px",
  };

  const badge: React.CSSProperties = {
    fontSize: "11px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#fbbf24",
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
  };

  const section: React.CSSProperties = {
    marginTop: 32,
    paddingTop: 24,
    borderTop: "1px solid #111827",
  };

  const h2: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: 10,
  };

  const h3: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: 700,
    marginTop: 18,
    marginBottom: 6,
  };

  const list: React.CSSProperties = {
    margin: "6px 0 0 18px",
    padding: 0,
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#e5e7eb",
  };

  const infoBox: React.CSSProperties = {
    borderRadius: 18,
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.9)",
    padding: "14px 16px",
    marginTop: 10,
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#e5e7eb",
  };

  const buttonsRow: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 18,
  };

  const primaryButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 22px",
    borderRadius: 9999,
    background:
      "linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #fde68a 100%)",
    color: "#020617",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 10px 25px rgba(245, 158, 11, 0.35)",
  };

  const secondaryButton: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 22px",
    borderRadius: 9999,
    border: "1px solid #6b7280",
    color: "#e5e7eb",
    fontSize: "13px",
    fontWeight: 500,
    textDecoration: "none",
  };

  const smallLabel: React.CSSProperties = {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#9ca3af",
    marginBottom: 4,
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

  return (
    <div style={pageWrapper}>
      <div style={container}>
        {/* Hero */}
        <section>
          <div style={badge}>Application</div>
          <h1 style={h1}>Apply for the AIFA Violin Grade Exam</h1>
          <p style={paragraph}>
            This page explains how to apply for the AIFA Violin Grade Exam. The
            pilot edition is fully online: you submit your application and
            payment, then upload your performance video according to the
            instructions below.
          </p>
          <p style={paragraph}>
            Please read the information carefully before filling in the entry
            form. If you have any questions, feel free to contact us.
          </p>

          <div style={buttonsRow}>
            {/* ▼ 後で本物のURLに差し替え */}
            <Link
              href="https://example.com/violin-exam-entry-form"
              style={primaryButton}
            >
              Open entry form (Google Form)
            </Link>
            <Link
              href="https://example.com/violin-exam-payment"
              style={secondaryButton}
            >
              Go to payment page
            </Link>
          </div>

          <p style={{ ...subtle, marginTop: 10 }}>
            * Replace the links above with your actual Google Form and PayPal /
            payment URLs once they are ready.
          </p>
        </section>

        {/* Step 1 */}
        <section style={section}>
          <h2 style={h2}>Step 1 — Check your level</h2>
          <p style={paragraph}>
            Before applying, please decide which grade you would like to take.
            You can discuss this with your teacher and refer to the{" "}
            <Link
              href="/violin-exam/syllabus"
              style={{ color: "#facc15", textDecoration: "underline" }}
            >
              Levels &amp; Syllabus
            </Link>{" "}
            page.
          </p>
          <ul style={list}>
            <li>Choose one grade per application.</li>
            <li>Make sure the expected skills and repertoire match your level.</li>
            <li>
              If you are unsure, choose a slightly easier grade rather than a
              too difficult one.
            </li>
          </ul>
        </section>

        {/* Step 2 */}
        <section style={section}>
          <h2 style={h2}>Step 2 — Fill in the entry form</h2>
          <p style={paragraph}>
            Please complete the online entry form with the required information.
            The following items are typically requested:
          </p>

          <ul style={list}>
            <li>Participant&apos;s name and date of birth</li>
            <li>Contact e-mail address (parent or guardian)</li>
            <li>Country / region</li>
            <li>Chosen grade level</li>
            <li>
              Piece title and composer (if already decided; otherwise “to be
              confirmed”)
            </li>
            <li>Teacher&apos;s name (optional but recommended)</li>
          </ul>

          <div style={infoBox}>
            <div style={smallLabel}>Important</div>
            Please double-check your e-mail address. We will send all
            communication (payment confirmation, upload instructions, and
            results) to this address.
          </div>
        </section>

        {/* Step 3 */}
        <section style={section}>
          <h2 style={h2}>Step 3 — Pay the exam fee</h2>
          <p style={paragraph}>
            After submitting the form, please complete the payment via PayPal or
            card. Your application will be considered complete only after both
            the entry form and the payment are received.
          </p>

          <div style={infoBox}>
            <div style={smallLabel}>Example fee structure</div>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Type</th>
                  <th style={th}>Example amount (USD)</th>
                  <th style={th}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>Standard fee</td>
                  <td style={td}>110</td>
                  <td style={td}>Per exam, per participant</td>
                </tr>
                <tr>
                  <td style={td}>Early-bird discount</td>
                  <td style={td}>−20</td>
                  <td style={td}>For applications before the early deadline</td>
                </tr>
                <tr>
                  <td style={td}>Previous AIFA prize winner</td>
                  <td style={td}>−5</td>
                  <td style={td}>If you received 1st–3rd prize in AIFA</td>
                </tr>
                <tr>
                  <td style={td}>Other competition 1st prize</td>
                  <td style={td}>−5</td>
                  <td style={td}>If you show proof of another 1st prize</td>
                </tr>
              </tbody>
            </table>
            <p style={{ ...subtle, marginTop: 8 }}>
              *The table above is only an example. Please check the{" "}
              <Link
                href="/violin-exam/fees"
                style={{ color: "#facc15", textDecoration: "underline" }}
              >
                Fees &amp; Schedule
              </Link>{" "}
              page for the official amounts and discounts.
            </p>
          </div>
        </section>

        {/* Step 4 */}
        <section style={section}>
          <h2 style={h2}>Step 4 — Record and upload your video</h2>

          <h3 style={h3}>Recording guidelines (draft)</h3>
          <ul style={list}>
            <li>
              Use a smartphone, tablet, or camera in horizontal (landscape)
              orientation.
            </li>
            <li>
              Make sure we can clearly see your whole body, including the bow
              arm and posture.
            </li>
            <li>Record in one take if possible. No heavy editing or cut &amp; paste.</li>
            <li>
              Use natural or simple lighting; noise reduction is fine, but avoid
              heavy effects.
            </li>
            <li>
              Piano accompaniment is recommended where appropriate, but not
              mandatory for early grades.
            </li>
          </ul>

          <h3 style={h3}>Submitting the video</h3>
          <p style={paragraph}>
            After your payment is confirmed, we will send you detailed
            instructions by e-mail. In most cases, you will be asked to:
          </p>
          <ul style={list}>
            <li>Upload your video as “unlisted” on YouTube, or</li>
            <li>Send us a cloud link (Google Drive, Dropbox, etc.).</li>
          </ul>

          <div style={infoBox}>
            <div style={smallLabel}>Name your file / video</div>
            <p>
              Please include at least:{" "}
              <span style={{ fontWeight: 600 }}>
                participant name, grade, and piece title
              </span>{" "}
              in the video title or file name, for example:
              <br />
              <span style={{ fontStyle: "italic" }}>
                &quot;AIFA Violin Exam – Grade 5 – Amane Goto – Vivaldi Concerto
                in A minor 1st mov.&quot;
              </span>
            </p>
          </div>
        </section>

        {/* Step 5 */}
        <section style={section}>
          <h2 style={h2}>After submission</h2>
          <p style={paragraph}>
            Once we receive your video, our panel will review your performance.
            The typical timeline is:
          </p>
          <ul style={list}>
            <li>Video submission deadline → exam period starts</li>
            <li>3–4 weeks for evaluation and report preparation</li>
            <li>
              Results and feedback are sent by e-mail (PDF score sheet, radar
              chart, comments, and certificate if passed)
            </li>
          </ul>

          <p style={{ ...subtle, marginTop: 10 }}>
            For more general questions, please see the{" "}
            <Link
              href="/violin-exam/faq"
              style={{ color: "#facc15", textDecoration: "underline" }}
            >
              Violin Exam FAQ
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              style={{ color: "#facc15", textDecoration: "underline" }}
            >
              contact us directly
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
