import type { CSSProperties } from "react";
import Link from "next/link";

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
    textDecoration: "none",
    display: "inline-block",
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
    textDecoration: "none",
    display: "inline-block",
  };

  const subtleText: CSSProperties = {
    fontSize: "12px",
    color: "#9ca3af",
    margin: 0,
  };

  return (
    <main style={outerStyle}>
      <div style={containerStyle}>
        {/* Hero: ロゴ + メインメッセージ */}
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
            {/* ロゴ＋タイトル */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                marginBottom: "14px",
              }}
            >
              <img
                src="/aifa-violin-exam-logo.png"
                alt="AIFA Violin Exam logo"
                style={{
                  height: "96px",
                  width: "auto",
                  flexShrink: 0,
                  filter: "drop-shadow(0 0 10px rgba(252,211,77,0.55))",
                }}
              />
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#facc6b",
                    marginBottom: 4,
                  }}
                >
                  AIFA violin exam
                </div>
                <h1
                  style={{
                    fontSize: "26px",
                    lineHeight: 1.3,
                    margin: 0,
                    fontWeight: 800,
                    color: "#fefce8",
                  }}
                >
                  A flexible, video-based violin exam for young players.
                </h1>
              </div>
            </div>

            <p
              style={{
                margin: "8px 0 14px",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#cbd5f5",
              }}
            >
              The AIFA Violin Exam is built for families and teachers who want a
              structured, age-free system that still respects each student&apos;s
              individuality. Everything is video-based, so you can take the exam
              from anywhere in the world without travelling.
            </p>

            <p
              style={{
                margin: "0 0 18px",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#e5e7eb",
              }}
            >
              The syllabus is divided into <strong>144 small grades</strong>,
              grouped into four Titles (Foundation, Expansion, Perspective,
              Creation). You and your teacher choose the most suitable starting
              point, then move step-by-step at your own pace.
            </p>

            <ul
              style={{
                margin: "0 0 20px 18px",
                padding: 0,
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#e5e7eb",
              }}
            >
              <li>
                Take the exam by uploading a performance video instead of
                travelling to a venue.
              </li>
              <li>
                For now, each exam provides a{" "}
                <strong>detailed score sheet (PDF)</strong> and an{" "}
                <strong>official digital certificate</strong> for passed grades.
              </li>
              <li>
                Additional feedback options (such as comments or radar charts)
                may be added later.
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <Link href="/violin-exam/syllabus" style={primaryBtn}>
                View levels &amp; syllabus
              </Link>
              <Link href="/violin-exam/free-downloads" style={secondaryBtn}>
                Download free practice sheets
              </Link>
            </div>

            {/* 日程・詳細は準備中 + 通知ボタン */}
            <p style={subtleText}>
              Official dates, fees, and technical requirements for the first
              public edition are currently being prepared. If you would like to
              be notified when everything is ready, you can leave your contact
              information via the form below.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQNy94liaPkDzGdP8jKE8RB1QvsTuGunaMhw-k7nfhNkb36A/viewform"
              target="_blank"
              rel="noreferrer"
              style={{ ...primaryBtn, marginTop: "10px", fontSize: "13px" }}
            >
              Get notified when details are ready
            </a>
          </div>

          {/* Right side: Status / draft info */}
          <aside
            style={{
              borderRadius: "16px",
              padding: "16px 18px 18px",
              background:
                "radial-gradient(circle at 0% 0%, rgba(30,64,175,0.9), transparent 60%), #020617",
              border: "1px solid rgba(148,163,184,0.55)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 700,
                margin: "0 0 6px",
                color: "#fefce8",
              }}
            >
              Status of the first edition
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#e5e7eb",
              }}
            >
              The first public run of the AIFA Violin Exam is under active
              development. We are finalising:
            </p>
            <ul
              style={{
                margin: "0 0 4px 18px",
                padding: 0,
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#e5e7eb",
              }}
            >
              <li>Exact dates for video submission and payment</li>
              <li>Fee structure for different usage patterns</li>
              <li>Technical details (file format, recording guidelines, etc.)</li>
            </ul>
            <p
              style={{
                margin: "4px 0 0",
                fontSize: "12px",
                color: "#cbd5f5",
              }}
            >
              Until these details are officially confirmed, any dates or fees
              mentioned elsewhere should be treated as draft information only.
            </p>
          </aside>
        </section>

        {/* ここから下は必要に応じて、後で「How it works」などを追加してOK */}
      </div>
    </main>
  );
}
