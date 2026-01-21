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
            This page shows a draft of the planned fee structure and schedule
            for the AIFA Violin Grade Exam. The final amounts and dates for each
            session will be confirmed when we officially announce that edition.
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
          <h2 style={h2}>Planned fee structure</h2>
          <p style={paragraph}>
            The Violin Grade Exam can be taken either with a monthly subscription
            (recommended) or by paying per grade. Subscriptions focus on steady
            long–term growth, while the per–grade option is for those who prefer
            one–off exams.
          </p>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Plan</th>
                <th style={th}>Fee (USD)</th>
                <th style={th}>What&apos;s included</th>
              </tr>
            </thead>
            <tbody>
              <tr style={highlightRow}>
                <td style={td}>Basic subscription</td>
                <td style={td}>25 USD / month</td>
                <td style={td}>
                  <ul style={list}>
                    <li>
                      Up to <strong>1 new Grade assignment set</strong> per
                      month (tasks for that Grade), provided regardless of pass
                      or not–yet–pass in the previous month.
                    </li>
                    <li>
                      <strong>Unlimited re–submissions</strong> of any received
                      tasks while your subscription is active (no extra fee).
                    </li>
                    <li>
                      Video–based exam and <strong>pass / not yet pass</strong>{" "}
                      decision for each Grade you attempt.
                    </li>
                    <li>
                      <strong>Digital certificate (PDF)</strong> for each Grade
                      you pass.
                    </li>
                    <li>
                      Progress towards <strong>AIFA titles</strong>. Each title
                      later grants a free invitation to one AIFA competition
                      (details in the official rules).
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={td}>Advanced subscription</td>
                <td style={td}>35 USD / month</td>
                <td style={td}>
                  <ul style={list}>
                    <li>
                      Up to <strong>2 new Grade assignment sets</strong> per
                      month, regardless of pass / not–yet–pass status.
                    </li>
                    <li>
                      <strong>Unlimited re–submissions</strong> of any received
                      tasks while your subscription is active (no extra fee).
                    </li>
                    <li>
                      Video–based exam with pass / not yet pass decision.
                    </li>
                    <li>
                      <strong>Evaluation report</strong> for each Grade
                      (category scores, comments, and visual feedback such as a
                      radar chart).
                    </li>
                    <li>
                      Digital certificate (PDF) for each Grade you pass.
                    </li>
                    <li>
                      Progress towards AIFA titles and the related competition
                      invitation benefits.
                    </li>
                    <li>
                      You can switch between Basic and Advanced at any time
                      between sessions.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={td}>Per–grade option</td>
                <td style={td}>50 USD / Grade</td>
                <td style={td}>
                  <ul style={list}>
                    <li>Access to one Grade&apos;s assignment set.</li>
                    <li>Video–based exam for that Grade.</li>
                    <li>
                      Pass / not yet pass decision and{" "}
                      <strong>evaluation report</strong>.
                    </li>
                    <li>Digital certificate (PDF) if you pass.</li>
                    <li>
                      Progress counts towards AIFA titles in the same way as
                      for subscription users.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={td}>Re–take (per–grade users)</td>
                <td style={td}>10 USD / task</td>
                <td style={td}>
                  <ul style={list}>
                    <li>
                      For participants using the per–grade option who wish to
                      re–submit specific tasks after a not–yet–pass result.
                    </li>
                    <li>
                      Subscription users (Basic / Advanced) can re–submit any
                      received tasks <strong>without extra fee</strong> as long
                      as their subscription remains active.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={noteBox}>
            <div style={smallLabel}>How tasks and attempts work</div>
            <p>
              Each Grade consists of a small set of core tasks. Under the
              subscription plans, you receive up to 1 (Basic) or 2 (Advanced)
              new Grade assignment sets per month. These are provided{" "}
              <strong>independently of the pass / not yet pass result</strong>{" "}
              for previous Grades, so you can continue practising and recording
              while waiting for evaluation.
            </p>
            <p style={{ marginTop: 6 }}>
              While your subscription is active, you may{" "}
              <strong>re–submit any of the tasks you have already received</strong>{" "}
              as many times as you like. For per–grade users, re–takes are
              available at 10 USD per task.
            </p>
          </div>
        </section>

        {/* Schedule */}
        <section style={section}>
          <h2 style={h2}>Example schedule for one session</h2>
          <p style={paragraph}>
            The Violin Grade Exam is planned as a fully online session with a
            clear time frame for applications, payments, and video submissions.
            Below is a draft timeline. The exact dates will be confirmed for
            each edition.
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
                Applications completed before this date are eligible for any
                early-bird discount we may offer for that edition.
              </p>
            </div>
            <div style={timelineCard}>
              <div style={smallLabel}>Evaluation period</div>
              <div style={timelineTitle}>Approx. 3–4 weeks</div>
              <p style={paragraph}>
                After the final deadline, our panel reviews all videos and
                prepares pass / not yet pass decisions, reports (where
                applicable), and certificates.
              </p>
            </div>
          </div>

          <h3 style={h3}>Results announcement</h3>
          <p style={paragraph}>
            Results are planned to be sent by e-mail around 3–4 weeks after the
            closing date. Each participant receives:
          </p>
          <ul style={list}>
            <li>Pass / not yet pass decision for the chosen Grade(s)</li>
            <li>
              <strong>For Advanced subscription and per–grade users:</strong>{" "}
              score sheet (PDF), radar–style overview, and written comments.
            </li>
            <li>
              <strong>For Basic subscription:</strong> short summary focusing on
              whether the Grade is passed and the next steps.
            </li>
            <li>Digital certificate (PDF) if the Grade is passed.</li>
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
