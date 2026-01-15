// app/legal/terms/page.tsx
"use client";

import type { CSSProperties } from "react";

export default function TermsPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    background: "#020617", // black/navy
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
        <h1 style={h1}>AIFA International Music Competition – Terms &amp; Conditions</h1>
        <p style={subtitle}>Last updated: January 2026</p>
        <hr style={hr} />

        {/* SECTION 1 */}
        <h2 style={sectionTitle}>1. Scope &amp; Agreement</h2>
        <p style={p}>
          These Terms and Conditions (the “Terms”) apply to all participants entering the AIFA International Music Competition (the “Competition”). By submitting an entry or paying the participation fee, the participant (or the participant’s parent/guardian, if under 18) agrees to be bound by these Terms.
        </p>

        <p style={p}>
          For the purposes of these Terms:
          <br />• “Participant” refers to the performing musician.
          <br />• “Organizer” refers to ChocoOnLabo (AIFA Competition Office).
          <br />• “Competition” refers to the AIFA International Music Competition.
        </p>

        {/* SECTION 2 */}
        <h2 style={sectionTitle}>2. Eligibility</h2>
        <p style={p}>
          The Competition is open to young musicians from all countries, subject to age and category rules. Age is determined based on the entry deadline.
        </p>

        {/* SECTION 3 */}
        <h2 style={sectionTitle}>3. Categories &amp; Repertoire</h2>
        <p style={p}>
          Participants must select the category appropriate for their age and repertoire. Repertoire must follow the rules and video guidelines provided on the Competition website. Changes to repertoire after submission are not guaranteed to be accepted.
        </p>

        {/* SECTION 4 */}
        <h2 style={sectionTitle}>4. Video Submission &amp; Requirements</h2>
        <p style={p}>
          Performances must be recorded as a continuous take. Video editing, splicing, audio replacement, or artificial enhancement is not permitted. Participants must upload their performance video to YouTube as <strong>Unlisted</strong> and provide the link in the entry form. The Organizer may request clarification or re-upload if the link is inaccessible or violates guidelines.
        </p>

        {/* SECTION 5 */}
        <h2 style={sectionTitle}>5. Jury &amp; Evaluation</h2>
        <p style={p}>
          The Competition employs a hybrid evaluation system combining <strong>AI-assisted analysis and human jury assessment</strong>. This system aims to provide both fair evaluation and educational value. The jury’s decisions are final and not subject to appeal. No correspondence regarding jury decisions will be accepted. The Organizer reserves the right to adjust evaluation procedures without prior notice.
        </p>

        {/* SECTION 6 */}
        <h2 style={sectionTitle}>6. Awards &amp; Results</h2>
        <p style={p}>

          Awards and distinctions will be granted according to the results of the evaluation.
For details on award classifications, please refer to the “Awards” section on the Competition website.
        </p>
        <p style={p}>
          Multiple winners may be awarded for the same rank, and some ranks may not be awarded. Results may include full rankings and categories.
        </p>
        <p style={p}>
          Results may be published in the following format:
          <br />
          <em>First Prize — [Name] (Country)</em>
        </p>
        <p style={p}>
          Additional information that may be published includes nationality (e.g., “(Canada)”) and teacher (if provided).
        </p>

        {/* SECTION 7 */}
        <h2 style={sectionTitle}>7. Certificates &amp; Trophies</h2>
        <p style={p}>
          Certificates may be issued digitally. Trophies or printed certificates may be offered as optional paid items.
        </p>

        {/* SECTION 8 */}
        <h2 style={sectionTitle}>8. Publication &amp; Media Rights</h2>
        <p style={p}>
          By entering the Competition, participants grant the Organizer the non-exclusive right to publish names, nationalities, awards, certificates, rankings, and selected performance videos on social media or the Competition website (only for award winners or selected performances at the Organizer’s discretion). Media may be used for promotional, educational, archival, or marketing purposes.
        </p>

        {/* SECTION 9 */}
        <h2 style={sectionTitle}>9. Personal Information &amp; Privacy</h2>
        <p style={p}>
          Personal information is collected for the purpose of processing applications, verifying eligibility, publishing results, issuing certificates, contacting participants, and administering the Competition. The Organizer will not sell or share data except as required for operational or legal purposes. The Privacy Policy provides additional details.
        </p>

        {/* SECTION 10 */}
        <h2 style={sectionTitle}>10. Entry Procedure</h2>
        <p style={p}>
          Entries are considered complete only when <strong>both</strong> payment and entry form have been received. If either is missing, the entry may be treated as incomplete.
        </p>

        {/* SECTION 11 */}
        <h2 style={sectionTitle}>11. Payment &amp; Fees</h2>
        <p style={p}>
          Participation fees must be paid via PayPal or other methods specified on the Competition website. Fees are listed in US Dollars (USD).
        </p>

        {/* SECTION 12 */}
        <h2 style={sectionTitle}>12. Refund Policy</h2>
        <p style={p}>
          All participation fees are <strong>strictly non-refundable</strong> except where prohibited by law. If a participant pays but does not submit the entry form, the entry may be cancelled and the fee will not be refunded.
        </p>

        {/* SECTION 13 */}
        <h2 style={sectionTitle}>13. Failure to Submit Materials</h2>
        <p style={p}>
          If required materials are missing, corrupted, or violate rules, the Organizer may request resubmission. If the participant fails to respond, the entry may be cancelled.
        </p>

        {/* SECTION 14 */}
        <h2 style={sectionTitle}>14. Communication</h2>
        <p style={p}>
          Official communication is conducted via email or the Contact Form. The Organizer may send one reminder regarding incomplete entries but is not obligated to pursue missing information.
        </p>

        {/* SECTION 15 */}
        <h2 style={sectionTitle}>15. Disqualification</h2>
        <p style={p}>
          The Organizer may disqualify participants for falsified information, manipulated recordings, inappropriate conduct, rule violations, or late submissions. Disqualified participants are not entitled to refunds.
        </p>

        {/* SECTION 16 */}
        <h2 style={sectionTitle}>16. Force Majeure</h2>
        <p style={p}>
          The Organizer is not liable for delays or cancellations caused by events outside its reasonable control, including pandemics, natural disasters, political disturbances, or technical failures.
        </p>

        {/* SECTION 17 */}
        <h2 style={sectionTitle}>17. Governing Law &amp; Dispute Resolution</h2>
        <p style={p}>
          These Terms are governed by and construed in accordance with the laws of Japan. All disputes shall be subject to the exclusive jurisdiction of Japanese courts.
        </p>

        {/* SECTION 18 */}
        <h2 style={sectionTitle}>18. Organizer Information</h2>
        <p style={address}>
          Organizer: ChocoOnLabo (AIFA Competition Office)
          <br />
          〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階
          <br />
          Email: <strong>chocoonlabo@gmail.com</strong>
        </p>
        <p style={address}>
          International Correspondence Address:
          <br />
          1-3-1 Kita-Aoyama, Minato-ku, Tokyo 107-0061, Japan
        </p>

        {/* SECTION 19 */}
        <h2 style={sectionTitle}>19. Amendments</h2>
        <p style={p}>
          The Organizer may modify these Terms at any time. Changes will be posted on the Competition website and apply to future entries unless specified otherwise.
        </p>

        {/* SECTION 20 */}
        <h2 style={sectionTitle}>20. Acceptance</h2>
        <p style={p}>
          Submission of payment and/or entry form constitutes acceptance of these Terms.
        </p>

        <footer style={copyright}>
          © 2026 AIFA International Music Competition
        </footer>
      </section>
    </main>
  );
}
