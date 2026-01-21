// app/violin-exam/syllabus/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ViolinExamSyllabusPage() {
  const pageWrapper: React.CSSProperties = {
    minHeight: "100vh",
    padding: "40px 16px 60px",
    boxSizing: "border-box",
  };

  const container: React.CSSProperties = {
    maxWidth: "960px",
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

  const list: React.CSSProperties = {
    margin: "6px 0 0 18px",
    padding: 0,
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#e5e7eb",
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

  const bandTitle: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 700,
    marginTop: 10,
    marginBottom: 4,
  };

  const bandBox: React.CSSProperties = {
    borderRadius: 18,
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.9)",
    padding: "10px 14px",
    fontSize: "13px",
    lineHeight: 1.6,
    color: "#e5e7eb",
    marginTop: 6,
  };

  const smallLabel: React.CSSProperties = {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#9ca3af",
    marginBottom: 4,
  };

  const twoCol: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1.1fr)",
    gap: 28,
    marginTop: 10,
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
    display: "inline-block",
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

  const titleWithMedal: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    textAlign: "center",
  };

  const medalImage: React.CSSProperties = {
    display: "block",
  };

  // ★ ここから新しく追加したスタイル ★
  const gradeButtonsGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(56px, 1fr))",
    gap: 8,
    marginTop: 16,
  };

  const gradeButton: React.CSSProperties = {
    borderRadius: 9999,
    border: "1px solid #4b5563",
    padding: "6px 10px",
    fontSize: "11px",
    textAlign: "center",
    textDecoration: "none",
    color: "#e5e7eb",
    background: "rgba(15,23,42,0.9)",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  return (
    <div style={pageWrapper}>
      <div style={container}>
        {/* Hero */}
        <section>
          <div style={badge}>Levels &amp; Syllabus</div>
          <h1 style={h1}>AIFA Violin Grade Exam — Syllabus</h1>
          <p style={paragraph}>
            This syllabus outlines the draft structure of the AIFA Violin Grade
            Exam. It is designed as an age-free, flexible pathway: players can
            start from any level and move step by step toward more advanced
            technique and expression.
          </p>
          <p style={paragraph}>
            In the AIFA ecosystem, the Competition and the Grade Exam serve
            different but complementary functions. The Competition (free
            repertoire) nurtures individuality, interpretation, and artistic
            ambition. The Grade Exam provides the framework and continuity that
            sustain those ambitions over years of study.
          </p>
          <p style={paragraph}>
            Young players often spend months preparing the same work for recitals
            and competitions. While essential for artistry, this can lead to
            uneven development—or weakened motivation from being locked into a
            single piece for too long. The AIFA Grade Exam prevents such
            stagnation through a structure that is age-free, flexible, and
            small-step. It is designed to support steady growth without
            discouragement, and to make the foundations of musicianship visible,
            measurable, and rewarding.
          </p>
          <p style={subtle}>
            The final, detailed syllabus for each grade will be published as a
            separate PDF when the exam is officially launched. Until then, this
            page shows the core philosophy, titles, and example level mapping.
          </p>

         {/* <div style={buttonsRow}>
            <Link href="/violin-exam/apply" style={primaryButton}>
              Ready? Go to Apply page
            </Link>
            <Link href="/violin-exam/faq" style={secondaryButton}>
              Read Violin Exam FAQ
            </Link>
          </div>*/}
        </section>

        {/* Titles & grade bands */}
        <section style={section}>
          <h2 style={h2}>Titles &amp; grade bands</h2>
          <p style={paragraph}>
            The structure is easy to follow: four tasks make one Grade, and
            thirty-six Grades make one Title. AIFA uses four abstract Titles
            instead of age or school year. These Titles can be used safely on
            applications and profiles without implying professional status, and
            players may begin at any Grade as long as the technical and musical
            level is appropriate.
          </p>
          <p style={paragraph}>
            Each task gives a stamp, and each Grade gives a certificate, so
            progress remains visible even when students work on the same piece
            for months. The recommended speed is one task per week, but families
            can go faster or slower. Some move quickly during holidays; others
            slow down during recitals or competitions. The system is flexible.
            To select a starting Grade, ask the student&apos;s teacher — or send
            a recent performance video to AIFA for placement guidance.
          </p>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Title (band)</th>
                <th style={th}>Approx. grades*</th>
                <th style={th}>Landmark repertoire (examples)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={highlightRow}>
                <td style={td}>
                  <div style={titleWithMedal}>
                    <strong>Foundation</strong>
                    <Image
                      src="/medals/medal-foundation_v2.png"
                      alt="Foundation medal"
                      width={90}
                      height={90}
                      style={medalImage}
                    />
                  </div>
                </td>
                <td style={td}>G1 – G36</td>
                <td style={td}>
                  <ul style={{ ...list, marginLeft: 16 }}>
                    <li>
                      Vivaldi — <em>Concerto in A minor</em>, 1st movement
                      (Concerto)
                    </li>
                    <li>
                      Seitz — Concertos (e.g. No.2, No.5) (Concertino)
                    </li>
                    <li>Rieding — Concertino in B minor Op.35 (Concertino)</li>
                    <li>Küchler — Concertino Op.15 (Concertino)</li>
                    <li>
                      Bohm — <em>Introduction and Polonaise</em> (Salon /
                      showpiece-lite)
                    </li>
                    <li>
                      Selected Bach minuets or bourrées at a similar level
                      (Baroque dance)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <div style={titleWithMedal}>
                    <strong>Expansion</strong>
                    <Image
                      src="/medals/medal-expansion_v2.png"
                      alt="Expansion medal"
                      width={90}
                      height={90}
                      style={medalImage}
                    />
                  </div>
                </td>
                <td style={td}>G37 – G72</td>
                <td style={td}>
                  <ul style={{ ...list, marginLeft: 16 }}>
                    <li>
                      Monti — <em>Czardas</em> (Showpiece)
                    </li>
                    <li>
                      Kreisler — <em>Schön Rosmarin</em>,{" "}
                      <em>Liebesleid</em> (Light showpieces)
                    </li>
                    <li>Elgar — La Capricieuse (Showpiece)</li>
                    <li>
                      Drdla — pieces such as <em>Souvenir</em>,{" "}
                      <em>Serenade</em> (Salon)
                    </li>
                    <li>Kabalevsky — Violin Concerto (Concerto)</li>
                    <li>
                      Wieniawski — lighter showpieces (e.g. <em>Obertass</em>)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <div style={titleWithMedal}>
                    <strong>Perspective</strong>
                    <Image
                      src="/medals/medal-perspective_v2.png"
                      alt="Perspective medal"
                      width={90}
                      height={90}
                      style={medalImage}
                    />
                  </div>
                </td>
                <td style={td}>G73 – G108</td>
                <td style={td}>
                  <ul style={{ ...list, marginLeft: 16 }}>
                    <li>
                      Kreisler — <em>Praeludium and Allegro</em> (Showpiece)
                    </li>
                    <li>
                      Kreisler — <em>Liebesfreud</em>,{" "}
                      <em>Caprice Viennois</em> (Showpieces)
                    </li>
                    <li>
                      Bruch — <em>Violin Concerto No.1</em> (selected movements)
                      (Concerto)
                    </li>
                    <li>
                      Mendelssohn — <em>Violin Concerto</em> (excerpts)
                      (Concerto)
                    </li>
                    <li>
                      Lalo — <em>Symphonie Espagnole</em> (early movements)
                      (Concerto / orchestral showpiece)
                    </li>
                    <li>
                      Massenet — <em>Méditation from Thaïs</em> (Lyric piece)
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={td}>
                  <div style={titleWithMedal}>
                    <strong>Creation</strong>
                    <Image
                      src="/medals/medal-creation_v2.png"
                      alt="Creation medal"
                      width={90}
                      height={90}
                      style={medalImage}
                    />
                  </div>
                </td>
                <td style={td}>G109 – G144</td>
                <td style={td}>
                  <ul style={{ ...list, marginLeft: 16 }}>
                    <li>
  <span>
    Sarasate — <em>Zigeunerweisen</em> (Bravura showpiece) — the end point of
    the AIFA Violin Grade Exam syllabus
  </span>
</li>

                    <li>
                      Saint-Saëns —{" "}
                      <em>Introduction &amp; Rondo Capriccioso</em> (Bravura /
                      concerto-style showpiece)
                    </li>
                    <li>
                      Wieniawski — <em>Polonaise Brillante</em>,{" "}
                      <em>Scherzo-Tarantella</em> (Bravura showpieces)
                    </li>
                    <li>
                      Lalo — <em>Symphonie Espagnole</em> (later movements)
                      (Concerto / orchestral showpiece)
                    </li>
                    <li>
                      Bruch or Mendelssohn concertos at an advanced level
                      (Concerto)
                    </li>
                    <li>
                      Selected Paganini or comparable bravura works at similar
                      technical demand
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <p style={subtle}>
            *The exact grade numbers and cut-off points may be adjusted in the
            final version. The titles themselves (Foundation / Expansion /
            Perspective / Creation) are fixed. The landmark pieces above are
            guidelines, not fixed exam repertoire.
          </p>
        </section>



        {/* ★ ここから Example description 以降を差し替えた新セクション ★ */}
        <section style={section}>
          <h2 style={h2}>Grades G1 – G144 and future detail pages</h2>
          <p style={paragraph}>
            The AIFA Violin Grade Exam consists of 144 small steps, from G1 up
            to G144. Each button below corresponds to one Grade. In the final
            version, tapping a Grade will open its dedicated detail page with a
            short description and a sample image of the first page of the exam
            sheet.
          </p>
        

  {/* 通知用 Google Forms ボタン */}
          <div style={{ marginTop: 28 }}>
            <div style={smallLabel}>Stay informed</div>
            <p style={paragraph}>
              The detailed explanations and sample pages for each Grade will be
              published step by step. If you would like to be notified when the
              details for your target Grades are ready, you can leave your
              contact via the form below.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQNy94liaPkDzGdP8jKE8RB1QvsTuGunaMhw-k7nfhNkb36A/viewform"
              target="_blank"
              rel="noreferrer"
              style={primaryButton}
            >
              Get notified when details are ready
            </a>
          
          </div>

          {/* 144 Grade buttons */}
          <div style={gradeButtonsGrid}>
            {Array.from({ length: 144 }, (_, index) => {
              const gradeNumber = index + 1;
              const gradeCode = `G${gradeNumber}`;

              // 将来的に /violin-exam/syllabus/grades/g1 などの詳細ページを作る想定
              const href = `/violin-exam/syllabus/grades/g${gradeNumber}`;

              return (
                <Link key={gradeCode} href={href} style={gradeButton}>
                  {gradeCode}
                </Link>
              );
            })}
          </div>

        
        </section>
                {/* Assessment categories */}
        <section style={section}>
          <h2 style={h2}>Assessment categories</h2>
          <p style={paragraph}>
            Each grade is evaluated using common categories. These are
            age-neutral and focus on how the player uses their current ability.
            The weight of each category may change slightly depending on the
            level.
          </p>

          <div style={twoCol}>
            <div>
              <div style={bandTitle}>Core technical categories</div>
              <ul style={list}>
                <li>
                  <strong>Intonation</strong> – pitch accuracy and stability in
                  each position
                </li>
                <li>
                  <strong>Rhythm &amp; pulse</strong> – sense of beat, note
                  values, steadiness of tempo
                </li>
                <li>
                  <strong>Sound &amp; tone quality</strong> – clarity,
                  resonance, control of noise
                </li>
                <li>
                  <strong>Bowing</strong> – contact point, bow division,
                  changes, basic to advanced strokes depending on level
                </li>
                <li>
                  <strong>Posture &amp; setup</strong> – left-hand shape, bow
                  hold, instrument position
                </li>
              </ul>
            </div>

            <div>
              <div style={bandTitle}>Musical categories</div>
              <ul style={list}>
                <li>
                  <strong>Musical expression</strong> – dynamics, phrasing,
                  character, contrast
                </li>
                <li>
                  <strong>Style &amp; articulation</strong> – legato, staccato,
                  accents, stylistic awareness for the chosen piece
                </li>
                <li>
                  <strong>Overall performance</strong> – flow, confidence, stage
                  presence, communication with the listener
                </li>
              </ul>

              <div style={bandBox}>
                <div style={smallLabel}>Radar chart</div>
                Each exam result is visualised as a radar chart across these
                categories. This makes it easy to see individual strengths and
                where to focus in the next practice cycle, regardless of age or
                chosen repertoire.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
