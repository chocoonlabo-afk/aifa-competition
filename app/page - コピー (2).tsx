import type { CSSProperties } from "react";

export default function Page() {
  const outerStyle: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  };

  const sectionCard: CSSProperties = {
    background:
      "radial-gradient(circle at 0% 0%, rgba(148,163,184,0.18), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "26px 26px 28px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(148,163,184,0.35)",
  };

  const sectionTitle: CSSProperties = {
    fontSize: "22px",
    fontWeight: 700,
    margin: "0 0 16px",
    color: "#f9fafb",
  };

  const pillStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    background:
      "linear-gradient(135deg, rgba(250,204,21,0.16), rgba(56,189,248,0.18))",
    color: "#facc6b",
  };

  const primaryBtn: CSSProperties = {
    borderRadius: "999px",
    padding: "11px 24px",
    border: "none",
    fontSize: "14px",
    fontWeight: 700,
    cursor: "pointer",
    background: "linear-gradient(135deg, #facc6b, #f97316)",
    color: "#0b1120",
    boxShadow: "0 14px 32px rgba(250,204,21,0.4)",
  };

  const secondaryBtn: CSSProperties = {
    borderRadius: "999px",
    padding: "10px 22px",
    border: "1px solid rgba(148,163,184,0.7)",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    background: "transparent",
    color: "#e5e7eb",
  };

  return (
    <main style={outerStyle}>
      <div style={containerStyle}>
        {/* Hero */}
        <section
          style={{
            ...sectionCard,
            display: "grid",
            gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1.4fr)",
            gap: "24px",
          }}
        >
          {/* Left side: main message */}
          <div>
            <div style={pillStyle}>
              <span>Early Start Model</span>
              <span style={{ opacity: 0.75 }}>Online-only Edition</span>
            </div>

            <h1
              style={{
                fontSize: "32px",
                lineHeight: 1.2,
                margin: "18px 0 10px",
                fontWeight: 800,
                color: "#fefce8",
              }}
            >
              AIFA International Music Competition
            </h1>

            <p
              style={{
                margin: "0 0 18px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#cbd5f5",
              }}
            >
              A new online competition where{" "}
              <strong>AI-based analysis</strong> and an{" "}
              <strong>international jury</strong> work together to support young
              musicians. Designed to be accessible and transparent, with a focus
              on long-term artistic growth rather than one-time results only.
            </p>

            <p
              style={{
                margin: "0 0 22px",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#e5e7eb",
              }}
            >
              The first edition will start as a compact{" "}
              <strong>online-only model</strong> for Violin, Cello and Piano.
              In future years, AIFA will expand categories and develop an
              exam-style certification system.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <a href="/apply">
                <button style={primaryBtn}>Apply for the next edition</button>
              </a>
              <a href="/categories">
                <button style={secondaryBtn}>
                  View categories &amp; rules
                </button>
              </a>
            </div>

            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                margin: 0,
              }}
            >
              Application period and detailed schedule may be updated. Please
              check this website for the latest information.
            </p>
          </div>

          {/* Right side: 2026 overview */}
          <aside
            style={{
              borderRadius: "16px",
              padding: "16px 18px 18px",
              background:
                "radial-gradient(circle at 0% 0%, rgba(30,64,175,0.9), transparent 60%), #020617",
              border: "1px solid rgba(148,163,184,0.55)",
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
                  color: "#fefce8",
                }}
              >
                2026 Edition &mdash; Overview
              </h2>
              <p
                style={{
                  margin: "0 0 14px",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "#e5e7eb",
                }}
              >
                The “early start” edition of AIFA will be held as a fully online
                competition. It is intentionally small and focused so that we
                can refine the system before expanding in later years.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
                fontSize: "12px",
                color: "#e5e7eb",
              }}
            >
              <div>
                <div style={{ opacity: 0.75, marginBottom: 2 }}>Planned</div>
                <div style={{ fontWeight: 600 }}>Summer 2026</div>
              </div>
              <div>
                <div style={{ opacity: 0.75, marginBottom: 2 }}>Format</div>
                <div style={{ fontWeight: 600 }}>Video submission</div>
              </div>
              <div>
                <div style={{ opacity: 0.75, marginBottom: 2 }}>
                  Instruments
                </div>
                <div style={{ fontWeight: 600 }}>Violin / Cello / Piano</div>
              </div>
              <div>
                <div style={{ opacity: 0.75, marginBottom: 2 }}>Age range</div>
                <div style={{ fontWeight: 600 }}>Approx. 5–18 years</div>
              </div>
            </div>
          </aside>
        </section>

        {/* Why AIFA */}
        <section style={sectionCard}>
          <h2 style={sectionTitle}>Why choose AIFA?</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            <div
              style={{
                padding: "14px 14px 18px",
                borderRadius: "14px",
                background: "#020617",
                border: "1px solid rgba(148,163,184,0.55)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fefce8",
                }}
              >
                Global online competition
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#e5e7eb",
                }}
              >
                Participate from anywhere in the world. All rounds are held via
                video submission, reducing travel costs and making it easier to
                join.
              </p>
            </div>

            <div
              style={{
                padding: "14px 14px 18px",
                borderRadius: "14px",
                background: "#020617",
                border: "1px solid rgba(148,163,184,0.55)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fefce8",
                }}
              >
                AI-supported evaluation
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#e5e7eb",
                }}
              >
                AI helps analyse pitch, rhythm and consistency. Final artistic
                decisions remain with experienced human jury members, combining
                objectivity and musical insight.
              </p>
            </div>

            <div
              style={{
                padding: "14px 14px 18px",
                borderRadius: "14px",
                background: "#020617",
                border: "1px solid rgba(148,163,184,0.55)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#fefce8",
                }}
              >
                Accessible &amp; transparent
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "#e5e7eb",
                }}
              >
                Clear categories, reasonable fees and result information that
                focuses on each musician&apos;s next step, not just rankings.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section style={sectionCard}>
          <h2 style={sectionTitle}>Competition schedule (draft)</h2>
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "14px",
              color: "#e5e7eb",
            }}
          >
            Exact dates may change, but the basic schedule for the early edition
            is as follows:
          </p>
          <ul
            style={{
              margin: "0 0 8px 18px",
              padding: 0,
              fontSize: "14px",
              color: "#e5e7eb",
              lineHeight: 1.7,
            }}
          >
            <li>Entry period: July 2026 (approx.)</li>
            <li>Video submission deadline: late July 2026</li>
            <li>Results announcement: August 2026</li>
          </ul>
          <a href="/guidelines" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                marginTop: "10px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#facc6b",
              }}
            >
              View detailed guidelines &rarr;
            </span>
          </a>
        </section>

        {/* Winners / Results */}
        <section style={sectionCard}>
          <h2 style={sectionTitle}>Winners &amp; results</h2>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "14px",
              color: "#e5e7eb",
            }}
          >
            After the 2026 edition has finished, prize winners and selected
            performances will be introduced on the results page.
          </p>
          <a href="/results" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                marginTop: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#0b1120",
                padding: "8px 16px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #facc6b, rgba(248,250,252,0.98))",
              }}
            >
              Go to results page
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}
