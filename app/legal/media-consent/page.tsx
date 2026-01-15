// app/legal/media-consent/page.tsx
"use client";

import type { CSSProperties } from "react";

export default function MediaConsentPage() {
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
        <h1 style={h1}>AIFA International Music Competition – Media &amp; Publicity Consent</h1>
        <p style={subtitle}>Last updated: January 2026</p>
        <hr style={hr} />

        {/* 1. Overview */}
        <h2 style={sectionTitle}>1. Overview</h2>
        <p style={p}>
          This Media &amp; Publicity Consent explains how the AIFA International Music Competition
          (&quot;AIFA&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) may use names, images,
          and performance materials in connection with the Competition and related promotional
          activities.
        </p>
        <p style={p}>
          By entering the Competition and submitting your application, you (or your parent/guardian,
          if under 18) acknowledge and agree to the terms below. This document forms part of the
          AIFA Terms &amp; Conditions and Privacy Policy.
        </p>

        {/* 2. Scope of Media Use */}
        <h2 style={sectionTitle}>2. Scope of Media Use</h2>
        <p style={p}>
          AIFA may use the following information and materials in connection with the Competition
          and its promotion:
        </p>
        <ul style={list}>
          <li>Participant&apos;s name</li>
          <li>Nationality</li>
          <li>Age category</li>
          <li>Repertoire titles</li>
          <li>Teacher&apos;s name (if provided)</li>
          <li>Competition results and awards</li>
          <li>Photographs or still images from performances</li>
          <li>Selected performance video or audio excerpts</li>
        </ul>
        <p style={p}>Media may be used on, including but not limited to:</p>
        <ul style={list}>
          <li>AIFA&apos;s official website</li>
          <li>Social media accounts (e.g., Instagram, Facebook, YouTube)</li>
          <li>Digital or printed brochures, posters, and flyers</li>
          <li>Emails, newsletters, or other communication related to AIFA</li>
        </ul>

        {/* 3. License Granted */}
        <h2 style={sectionTitle}>3. License Granted</h2>
        <p style={p}>
          You grant AIFA a <strong>non-exclusive, worldwide, royalty-free license</strong> to:
        </p>
        <ul style={list}>
          <li>reproduce, edit, adapt, and publicly display the media listed above,</li>
          <li>distribute such media in connection with AIFA&apos;s activities, and</li>
          <li>use such media for promotional, educational, and archival purposes.</li>
        </ul>
        <p style={p}>
          This license does <strong>not</strong> transfer ownership of your performance or any
          underlying copyright. It allows AIFA to use the materials as part of the Competition
          record and for future promotion of AIFA and its educational mission.
        </p>

        {/* 4. Performance Videos and Publication */}
        <h2 style={sectionTitle}>4. Performance Videos and Publication</h2>
        <p style={p}>
          Submission videos are primarily used for adjudication and internal review through a
          hybrid system of jury assessment and AI-assisted analysis.
        </p>
        <p style={p}>
          Participants may indicate in the entry form whether they are{" "}
          <strong>willing to have their performance considered for public showcasing</strong> on
          AIFA&apos;s platforms. This indication expresses preference but does not guarantee
          publication.
        </p>
        <p style={p}>
          AIFA retains full discretion regarding:
        </p>
        <ul style={list}>
          <li>which videos or excerpts to publish,</li>
          <li>in what format they are presented, and</li>
          <li>for how long they remain available online.</li>
        </ul>
        <p style={p}>
          The decision to publish or not publish a video has{" "}
          <strong>no effect on the Competition results</strong>.
        </p>

        {/* 5. Minors */}
        <h2 style={sectionTitle}>5. Minors</h2>
        <p style={p}>
          Where the Participant is a minor, the parent or legal guardian:
        </p>
        <ul style={list}>
          <li>confirms that they have the authority to grant this media consent, and</li>
          <li>
            agrees to the use of the minor&apos;s name, image, and performance materials as
            described in this document.
          </li>
        </ul>
        <p style={p}>
          If a parent or guardian later withdraws consent for future uses, AIFA will take reasonable
          steps to stop using the minor&apos;s media in new materials. However:
        </p>
        <ul style={list}>
          <li>previously printed materials cannot be recalled, and</li>
          <li>
            previously published online materials may remain in archives or third-party caches
            beyond AIFA&apos;s direct control.
          </li>
        </ul>

        {/* 6. Withdrawal or Limitation of Consent */}
        <h2 style={sectionTitle}>6. Withdrawal or Limitation of Consent</h2>
        <p style={p}>
          You may contact AIFA to request limitation or withdrawal of media use for future
          materials. AIFA will assess each request reasonably, taking into account:
        </p>
        <ul style={list}>
          <li>legal obligations,</li>
          <li>the public record nature of competition results, and</li>
          <li>the technical and practical feasibility of removal.</li>
        </ul>
        <p style={p}>
          Depending on the circumstances, this may result in:
        </p>
        <ul style={list}>
          <li>removing selected posts or media where feasible, or</li>
          <li>
            retaining certain content as part of the official Competition archive and record.
          </li>
        </ul>
        <p style={p}>
          Withdrawal of media consent does not affect the validity of past use carried out while
          consent was in place.
        </p>

        {/* 7. Contact */}
        <h2 style={sectionTitle}>7. Contact</h2>
        <p style={p}>
          For any questions or requests related to media and publicity, please contact:
        </p>
        <p style={address}>
          <strong>AIFA Competition Office (ChocoOnLabo)</strong>
          <br />
          〒107-0061 東京都港区北青山一丁目3番1号 アールキューブ青山3階
          <br />
          Email: <strong>chocoonlabo@gmail.com</strong>
        </p>

        <footer style={copyright}>
          © 2026 AIFA International Music Competition
        </footer>
      </section>
    </main>
  );
}
