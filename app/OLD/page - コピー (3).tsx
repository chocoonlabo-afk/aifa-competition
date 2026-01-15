export default function Page() {
  const outerStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 60px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  const sectionCard: React.CSSProperties = {
    background: "#ffffff",
    borderRadius: "18px",
    padding: "28px 28px 30px",
    boxShadow: "0 14px 45px rgba(15, 23, 42, 0.08)",
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 18px",
    color: "#111827",
  };

  const pillStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    background:
      "linear-gradient(135deg, rgba(48,79,254,0.08), rgba(0,184,212,0.12))",
    color: "#1a237e",
  };

  const primaryBtn: React.CSSProperties = {
    borderRadius: "999px",
    padding: "12px 26px",
    border: "none",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    background: "linear-gradient(135deg, #304ffe, #00b8d4)",
    color: "#ffffff",
    boxShadow: "0 12px 25px rgba(48,79,254,0.35)",
  };

  const secondaryBtn: React.CSSProperties = {
    borderRadius: "999px",
    padding: "11px 24px",
    border: "1px solid rgba(55,65,81,0.18)",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#ffffff",
    color: "#374151",
  };

  return (
    <main style={outerStyle}>
      <div style={containerStyle}>
        {/* Hero + side info */}
        <section
          style={{
            ...sectionCard,
            display: "grid",
            gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1.4fr)",
            gap: "24px",
            background:
              "radial-gradient(circle at 0% 0%, rgba(129,140,248,0.12), transparent 55%), radial-gradient(circle at 100% 0%, rgba(56,189,248,0.16), transparent 55%), #ffffff",
          }}
        >
          {/* Hero */}
          <div>
            <div style={pillStyle}>
              <span>Early Start Model</span>
              <span style={{ opacity: 0.7 }}>Online-only edition</span>
            </div>

            <h1
              style={{
                fontSize: "34px",
                lineHeight: 1.2,
                margin: "18px 0 12px",
                fontWeight: 800,
                color: "#020617",
              }}
            >
              AIFA International Music Competition
            </h1>

            <p
              style={{
                margin: "0 0 22px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#4b5563",
              }}
            >
              Global online competition for young musicians, combining{" "}
              <strong>AI-supported evaluation</strong> and{" "}
              <strong>international jury</strong>. Designed to be accessible,
              transparent, and growth-oriented.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <a href="/apply">
                <button style={primaryBtn}>Apply Now</button>
              </a>
              <a href="/categories">
                <button style={secondaryBtn}>View Categories &amp; Rules</button>
              </a>
            </div>

            <p
              style={{
                fontSize: "12px",
                color: "#6b7280",
                margin: 0,
              }}
            >
              Application period and detailed schedule are subject to change.
              Please check the website for the latest information.
            </p>
          </div>

          {/* Side panel */}
          <aside
            style={{
              borderRadius: "16px",
              padding: "16px 18px 18px",
              background:
                "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(30,64,175,0.9))",
              color: "#e5e7eb",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  margin: "0 0 10px",
                  color: "#f9fafb",
                }}
              >
                2026 Edition &mdash; Overview
              </h2>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "#cbd5f5",
                }}
              >
                The first AIFA edition will start as a compact online model,
                focusing on strings and piano. More categories and exam-style
                certifications will follow in later years.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
                fontSize: "12px",
              }}
            >
              <div>
                <div style={{ opacity: 0.7, marginBottom: 2 }}>Planned</div>
                <div style={{ fontWeight: 600 }}>Summer 2026</div>
              </div>
              <div>
                <div style={{ opacity: 0.7, marginBottom: 2 }}>Format</div>
                <div style={{ fontWeight: 600 }}>Video submission only</div>
              </div>
              <div>
                <div style={{ opacity: 0.7, marginBottom: 2 }}>Instruments</div>
                <div style={{ fontWeight: 600 }}>Violin / Cello / Piano</div>
              </div>
              <div>
                <div style={{ opacity: 0.7, marginBottom: 2 }}>Age range</div>
                <div style={{ fontWeight: 600 }}>Approx. 5–18 yrs</div>
              </div>
            </div>
          </aside>
        </section>

        {/* Why AIFA */}
        <section style={sectionCard}>
          <h2 style={sectionTitle}>Why AIFA?</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                padding: "16px 16px 18px",
                borderRadius: "14px",
                background: "#f9fafb",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                Global Online Competition
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#4b5563",
                }}
              >
                Join from anywhere in the world. All rounds are conducted via
                video submission, making participation simple and flexible.
              </p>
            </div>

            <div
              style={{
                padding: "16px 16px 18px",
                borderRadius: "14px",
                background: "#f9fafb",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                AI-supported Evaluation
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#4b5563",
                }}
              >
                AI analysis helps the jury to evaluate intonation, rhythm, and
                consistency, while musical decisions remain in human hands.
              </p>
            </div>

            <div
              style={{
                padding: "16px 16px 18px",
                borderRadius: "14px",
                background: "#f9fafb",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                Accessible &amp; Transparent
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#4b5563",
                }}
              >
                Clear categories, reasonable fees, and result information that
                focuses on learning and future growth.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section style={sectionCard}>
          <h2 style={sectionTitle}>Competition Schedule (planned)</h2>
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "14px",
              color: "#4b5563",
            }}
          >
            Exact dates will be announced after the official launch. The current
            plan for the first AIFA edition:
          </p>

          <ul
            style={{
              margin: "0 0 6px 18px",
              padding: 0,
              fontSize: "14px",
              color: "#374151",
              lineHeight: 1.7,
            }}
          >
            <li>Entry period: July 2026 (approx.)</li>
            <li>Video submission deadline: Late July 2026</li>
            <li>Results announcement: August 2026</li>
          </ul>

          <a href="/guidelines" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                marginTop: "12px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#304ffe",
              }}
            >
              View detailed guidelines &rarr;
            </span>
          </a>
        </section>

        {/* Winners / Results */}
        <section style={sectionCard}>
          <h2 style={sectionTitle}>Winners &amp; Results</h2>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "14px",
              color: "#4b5563",
            }}
          >
            After each edition, prize winners and selected performances will be
            presented on the results page.
          </p>
          <a href="/results" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                marginTop: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#111827",
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(31,41,55,0.2)",
                background: "#ffffff",
              }}
            >
              Go to Results page
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}
