// app/legal/privacy/page.tsx
"use client";

import type { CSSProperties } from "react";

export default function PrivacyPage() {
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
        <h1 style={h1}>AIFA International Music Competition – Privacy Policy</h1>
        <p style={subtitle}>Last updated: January 2026</p>
        <hr style={hr} />

        {/* 1. Introduction */}
        <h2 style={sectionTitle}>1. Introduction</h2>
        <p style={p}>
          This Privacy Policy explains how the AIFA International Music
          Competition (the &quot;Competition&quot;) collects, uses, stores,
          publishes, and protects personal information of participants and
          related individuals.
        </p>
        <p style={p}>
          The Competition is operated by ChocoOnLabo (AIFA Competition Office)
          (the &quot;Organizer&quot;). By submitting an entry or participating
          in the Competition, you (or your parent/guardian, if under 18) agree
          to this Privacy Policy.
        </p>
        <p style={p}>
          This Policy is designed for international participants and
          incorporates commonly recognized privacy principles, including certain
          rights under GDPR and other international standards, without adopting
          any specific jurisdictional framework in full.
        </p>

        {/* 2. Information We Collect */}
        <h2 style={sectionTitle}>2. Information We Collect</h2>
        <p style={p}>
          We collect the following categories of personal data for the purpose
          of administering the Competition:
        </p>

        <p style={p}>
          <strong>2.1 Entry &amp; Identification Data</strong>
        </p>
        <ul style={list}>
          <li>Participant name</li>
          <li>Nationality</li>
          <li>Date of birth or age category</li>
          <li>Teacher name (optional)</li>
          <li>Contact email</li>
          <li>Parent/guardian information (for minors)</li>
        </ul>

        <p style={p}>
          <strong>2.2 Performance &amp; Competition Data</strong>
        </p>
        <ul style={list}>
          <li>Category selection</li>
          <li>Repertoire information</li>
          <li>Performance video links (e.g., YouTube Unlisted)</li>
          <li>Evaluation data (including AI-assisted metrics and jury input)</li>
          <li>Award results and rankings</li>
        </ul>

        <p style={p}>
          <strong>2.3 Communication Data</strong>
        </p>
        <ul style={list}>
          <li>Inquiries via contact forms or email</li>
          <li>Operational correspondence (confirmations, reminders, results)</li>
        </ul>

        <p style={p}>
          <strong>2.4 Payment Data</strong>
        </p>
        <p style={p}>
          Payments are processed via PayPal or equivalent third-party payment
          processors. We do not store credit card numbers or card details
          directly.
        </p>
        <ul style={list}>
          <li>Payment status</li>
          <li>Transaction date and time</li>
          <li>Fee category (e.g., early-bird, standard, discounts)</li>
          <li>Currency and amount paid</li>
        </ul>

        <p style={p}>
          <strong>2.5 System &amp; Technical Data</strong>
        </p>
        <ul style={list}>
          <li>IP address, access times, browser/user agent, language</li>
          <li>Security and error logs</li>
        </ul>

        {/* 3. Purposes of Processing */}
        <h2 style={sectionTitle}>3. Purposes of Processing</h2>
        <p style={p}>Personal data is used for the following purposes:</p>
        <ul style={list}>
          <li>Administering participant entries and categories</li>
          <li>Age and eligibility verification</li>
          <li>Communication with participants and guardians</li>
          <li>Hybrid evaluation (jury + AI-assisted analysis)</li>
          <li>Award decisions and classifications</li>
          <li>Certificate issuance (digital or printed)</li>
          <li>Public announcement of results</li>
          <li>
            Optional display of selected performance videos on the Competition
            website or social media
          </li>
          <li>Accounting, billing, and record keeping</li>
          <li>Improving future editions of the Competition</li>
        </ul>

        {/* 4. Publication of Results */}
        <h2 style={sectionTitle}>4. Publication of Results</h2>
        <p style={p}>
          As an international music competition, publishing results is an
          essential component of transparency and recognition.
        </p>
        <p style={p}>
          The following information may be publicly disclosed in connection with
          participant results:
        </p>
        <ul style={list}>
          <li>Participant name</li>
          <li>Prize or award</li>
          <li>Nationality</li>
          <li>Teacher name (if provided voluntarily)</li>
        </ul>
        <p style={p}>
          For example, results may be published in the format:
          <br />
          <em>First Prize — [Name] (Country), Teacher: [Name]</em>
        </p>
        <p style={p}>
          Results may be published on the Competition website, social media, and
          in brochures, certificates, or similar materials.
        </p>

        {/* 5. Publication of Performance Videos */}
        <h2 style={sectionTitle}>5. Publication of Performance Videos</h2>
        <p style={p}>
          Performance videos are not automatically published. Selected videos
          may be published at the Organizer&apos;s discretion for promotional,
          educational, or archival purposes.
        </p>
        <p style={p}>
          Selection criteria may include prize classification, artistic quality,
          and suitability as a representative performance. Only selected videos
          are preserved permanently as part of the Competition archive. Other
          performance materials are retained only as long as necessary for
          operation and are not published.
        </p>

        {/* 6. Legal Basis (GDPR-lite) */}
        <h2 style={sectionTitle}>6. Legal Basis (GDPR-lite Format)</h2>
        <p style={p}>
          For international clarity, data processing is based on the following
          principles:
        </p>
        <ul style={list}>
          <li>
            <strong>Consent</strong> – for participation and submission of
            information and materials
          </li>
          <li>
            <strong>Contractual necessity</strong> – to administer the
            Competition and evaluate performances
          </li>
          <li>
            <strong>Legitimate interests</strong> – recognition of achievements,
            publication of results, archival purposes, and improving the
            Competition
          </li>
          <li>
            <strong>Legal obligations</strong> – accounting, record keeping, and
            fraud prevention
          </li>
        </ul>
        <p style={p}>
          This Privacy Policy references GDPR-related concepts for clarity but
          does not adopt any single jurisdiction&apos;s regulations in full.
        </p>

        {/* 7. Third Parties & Data Sharing */}
        <h2 style={sectionTitle}>7. Third Parties &amp; Data Sharing</h2>
        <p style={p}>
          We may share personal data with limited third parties for operational
          purposes, including:
        </p>
        <ul style={list}>
          <li>Payment processors (e.g., PayPal)</li>
          <li>Hosting and cloud service providers</li>
          <li>Jury members and evaluators</li>
          <li>AI-based evaluation systems (with access control)</li>
          <li>Certificate printing or trophy vendors (if applicable)</li>
          <li>Accounting or legal professionals (if required)</li>
        </ul>
        <p style={p}>
          We do not sell personal data or share it for unrelated marketing
          purposes.
        </p>

        {/* 8. Transfers Across Borders */}
        <h2 style={sectionTitle}>8. Transfers Across Borders</h2>
        <p style={p}>
          As an international competition, data may be processed in or
          transferred to countries different from the participant&apos;s
          country of residence. This includes:
        </p>
        <ul style={list}>
          <li>Website hosting and content delivery</li>
          <li>Cloud storage and backup</li>
          <li>Publication of results and selected performances</li>
          <li>International ranking and archival</li>
        </ul>

        {/* 9. Data Retention */}
        <h2 style={sectionTitle}>9. Data Retention</h2>
        <p style={p}>Retention periods are defined as follows:</p>
        <ul style={list}>
          <li>
            <strong>Results and awards:</strong> retained permanently as part of
            the official record of the Competition
          </li>
          <li>
            <strong>Selected videos (winners or chosen performances):</strong>{" "}
            retained permanently as part of the archive
          </li>
          <li>
            <strong>Non-selected performance materials and entry data:</strong>{" "}
            retained only for the period necessary to operate the Competition
          </li>
          <li>
            <strong>Financial and accounting records:</strong> retained for
            legally required periods (typically 5–7 years)
          </li>
          <li>
            <strong>Communications:</strong> retained for operational necessity
            and dispute resolution
          </li>
        </ul>
        <p style={p}>
          Participants may request deletion of non-essential materials where
          legally and operationally possible.
        </p>

        {/* 10. Rights of Participants */}
        <h2 style={sectionTitle}>10. Rights of Participants</h2>
        <p style={p}>
          Within reasonable limits and applicable law, participants (or their
          guardians) may request:
        </p>
        <ul style={list}>
          <li>Access to personal data</li>
          <li>Correction or updates of inaccurate information</li>
          <li>
            Deletion of data where compatible with awards, archives, and legal
            obligations
          </li>
          <li>Restriction of processing in certain cases</li>
          <li>Objection to processing for non-essential purposes</li>
          <li>Withdrawal of consent where processing is based on consent</li>
        </ul>
        <p style={p}>
          These rights do not override the need to preserve official competition
          records, published results, or selected archival performances.
        </p>

        {/* 11. Participation by Minors */}
        <h2 style={sectionTitle}>11. Participation by Minors</h2>
        <p style={p}>
          Many participants are minors. Parental or guardian consent is
          required, and parents/guardians may exercise rights on behalf of the
          participant. Teacher names are optional and provided voluntarily.
        </p>

        {/* 12. Payment & Security */}
        <h2 style={sectionTitle}>12. Payment &amp; Security</h2>
        <p style={p}>
          Payments are handled by third-party processors such as PayPal. We do
          not store payment card details. Transaction information is retained
          for accounting, tax, and audit purposes.
        </p>

        {/* 13. Communications */}
        <h2 style={sectionTitle}>13. Communications &amp; Operational Notices</h2>
        <p style={p}>
          We may send emails or messages related to:
        </p>
        <ul style={list}>
          <li>Entry confirmation</li>
          <li>Deadline reminders or missing information</li>
          <li>Result notifications</li>
          <li>Certificates or award details</li>
          <li>Information about future editions of the Competition</li>
        </ul>
        <p style={p}>
          Participants may opt out of non-essential updates about future
          competitions at any time.
        </p>

        {/* 14. Changes to This Policy */}
        <h2 style={sectionTitle}>14. Changes to This Policy</h2>
        <p style={p}>
          This Privacy Policy may be updated periodically. Changes will be
          posted on the Competition website. Updated versions apply to future
          entries unless otherwise specified.
        </p>

        {/* 15. Contact */}
        <h2 style={sectionTitle}>15. Contact Information</h2>
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

        {/* 16. Acceptance */}
        <h2 style={sectionTitle}>16. Acceptance</h2>
        <p style={p}>
          Submission of entry materials and payment constitutes acceptance of
          this Privacy Policy.
        </p>

        <footer style={copyright}>
          © 2026 AIFA International Music Competition
        </footer>
      </section>
    </main>
  );
}
