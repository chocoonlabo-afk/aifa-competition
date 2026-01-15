import type { CSSProperties } from "react";

export default function CategoriesPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "1000px",
    background:
      "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.22), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 32px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(148,163,184,0.45)",
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
    margin: "24px 0 10px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const ul: CSSProperties = {
    margin: "6px 0 0 18px",
    padding: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const tableWrap: CSSProperties = {
    overflowX: "auto",
    borderRadius: "12px",
    border: "1px solid rgba(148,163,184,0.6)",
    marginTop: "8px",
  };

  const table: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
  };

  const th: CSSProperties = {
    padding: "10px 12px",
    textAlign: "left",
    background: "rgba(15,23,42,0.9)",
    color: "#e5e7eb",
    borderBottom: "1px solid rgba(55,65,81,0.9)",
    whiteSpace: "nowrap",
  };

  const td: CSSProperties = {
    padding: "9px 12px",
    borderBottom: "1px solid rgba(31,41,55,0.85)",
    color: "#e5e7eb",
  };

  const note: CSSProperties = {
    marginTop: "6px",
    fontSize: "12px",
    color: "#9ca3af",
  };

  return (
    <main style={wrapper}>
      <section style={card}>
        <h1 style={title}>Categories &amp; Rules</h1>

        {/* Instruments */}
        <h2 style={h3}>Instrument Categories</h2>
        <p style={p}>
          The first edition of AIFA International Music Competition is open to
          the following instruments:
        </p>
        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Category</th>
                <th style={th}>Instrument</th>
                <th style={th}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>Strings &mdash; Violin</td>
                <td style={td}>Violin</td>
                <td style={td}>Solo performance, with or without accompaniment</td>
              </tr>
              <tr>
                <td style={td}>Strings &mdash; Cello</td>
                <td style={td}>Cello</td>
                <td style={td}>Solo performance, with or without accompaniment</td>
              </tr>
              <tr>
                <td style={td}>Piano</td>
                <td style={td}>Piano</td>
                <td style={td}>Solo performance</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Age & Time */}
        <h2 style={h3}>Age Groups &amp; Time Limits</h2>
        <p style={p}>
          Age is calculated as of the <strong>entry deadline date</strong>. The
          maximum total playing time (including all pieces) is as follows:
        </p>
        <div style={tableWrap}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Age at deadline</th>
                <th style={th}>Maximum total playing time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={td}>3 years old</td>
                <td style={td}>up to 5 minutes</td>
              </tr>
              <tr>
                <td style={td}>4 years old</td>
                <td style={td}>up to 5 minutes</td>
              </tr>
              <tr>
                <td style={td}>5 years old</td>
                <td style={td}>up to 5 minutes</td>
              </tr>
              <tr>
                <td style={td}>6 years old</td>
                <td style={td}>up to 7 minutes</td>
              </tr>
              <tr>
                <td style={td}>7 years old</td>
                <td style={td}>up to 7 minutes</td>
              </tr>
              <tr>
                <td style={td}>8 years old</td>
                <td style={td}>up to 10 minutes</td>
              </tr>
              <tr>
                <td style={td}>9 years old</td>
                <td style={td}>up to 10 minutes</td>
              </tr>
              <tr>
                <td style={td}>10 years old</td>
                <td style={td}>up to 10 minutes</td>
              </tr>
              <tr>
                <td style={td}>11 years old</td>
                <td style={td}>up to 10 minutes</td>
              </tr>
              <tr>
                <td style={td}>12 years old</td>
                <td style={td}>up to 10 minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={note}>
           If the
          performance significantly exceeds the limit, the jury may listen only
          to part of the video.
        </p>

        {/* Format */}
        <h2 style={h3}>Competition Format</h2>
        <ul style={ul}>
          <li>
            AIFA is held as a <strong>one-round online competition</strong>.
          </li>
          <li>
            Participants submit a performance video and are evaluated by an
            international jury. AI-based analysis may be used as a supporting
            tool.
          </li>
          <li>
            Detailed information about awards and feedback is provided on the{" "}
            <a
              href="/awards"
              style={{ color: "#facc6b", textDecoration: "none" }}
            >
              Awards
            </a>{" "}
            page.
          </li>
        </ul>

        {/* Application */}
        <h2 style={h3}>Application</h2>
        <ul style={ul}>
          <li>
            Fill out the online entry form on the{" "}
            <a
              href="/apply"
              style={{ color: "#facc6b", textDecoration: "none" }}
            >
              Apply
            </a>{" "}
            page.
          </li>
          <li>
            Submit a <strong>YouTube link</strong> to your performance video.
          </li>
          <li>
            Pay the participation fee through the specified payment methods. The
            fee is <strong>non-refundable</strong>.
          </li>
          <li>
            The entry is considered complete only after both the form and the
            payment have been received.
          </li>
        </ul>

        {/* Video Requirements */}
        <h2 style={h3}>Video Requirements</h2>
        <ul style={ul}>
          <li>
            The performance must be recorded as{" "}
            <strong>video with audio</strong>. Audio-only recordings are not
            accepted.
          </li>
          <li>
            The video must be uploaded to YouTube as{" "}
            <strong>Unlisted</strong> (not Private). Download links (such as
            file-sharing services) are not accepted.
          </li>
          <li>
            No editing, splicing, or added effects are allowed. The video should
            show one continuous performance.
          </li>
          <li>
            Please avoid distortion and ensure that the recording does not clip.
            If accompaniment is used, it should not overpower the solo part.
          </li>
          <li>
            Video quality itself will not be graded, but the performer must be
            clearly visible and the sound must be clearly audible.
          </li>
          <li>
            The video must have been recorded within{" "}
            <strong>12 months</strong> prior to the submission date.
          </li>
        </ul>

        {/* Repertoire */}
        <h2 style={h3}>Repertoire Requirements</h2>
        <p style={p}>
          Participants may choose <strong>one or more pieces</strong> from the
          following musical periods:
        </p>
        <ul style={ul}>
          <li>Baroque</li>
          <li>Classical</li>
          <li>Romantic</li>
          <li>Contemporary classical music (up to the present)</li>
        </ul>
        <p style={{ ...p, marginTop: "8px" }}>
          Single movements or complete pieces are both accepted. Arrangements
          suitable for the participant&apos;s age and level are allowed.
        </p>

        {/* Consent & Use of Recordings */}
        <h2 style={h3}>Consent &amp; Use of Recordings</h2>
        <ul style={ul}>
          <li>
            For minors, a parent or legal guardian must provide consent for
            participation.
          </li>
          <li>
            A separate consent form will be required if the organiser uses the
            participant&apos;s name, image, video material, or biography on the
            official website or social media platforms.
          </li>
          <li>
            Only performances from applicants who agree to public presentation
            are eligible to be featured, and selection for public presentation
            is independent from the competition results.
          </li>
        </ul>
      </section>
    </main>
  );
}
