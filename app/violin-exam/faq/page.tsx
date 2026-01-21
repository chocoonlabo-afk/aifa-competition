// app/violin-exam/faq/page.tsx
import React from "react";
import Link from "next/link";

export default function ViolinExamFaqPage() {
  const pageWrapper: React.CSSProperties = {
    minHeight: "100vh",
    padding: "40px 16px 60px",
    boxSizing: "border-box",
  };

  const container: React.CSSProperties = {
    maxWidth: "880px",
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
    marginBottom: 10,
  };

  const faqItem: React.CSSProperties = {
    borderRadius: 18,
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.9)",
    padding: "12px 14px",
    marginTop: 10,
  };

  const question: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: 6,
  };

  const answer: React.CSSProperties = {
    fontSize: "13px",
    lineHeight: 1.7,
    color: "#e5e7eb",
  };

  const categoryTitle: React.CSSProperties = {
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    color: "#9ca3af",
    marginTop: 18,
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
          <div style={badge}>FAQ</div>
          <h1 style={h1}>Violin Grade Exam — Frequently Asked Questions</h1>
          <p style={paragraph}>
            This page answers common questions about the AIFA Violin Grade Exam.
            It is based on the current pilot plan, so some details may change
            when we announce the official edition.
          </p>
          <p style={subtle}>
            If your question is not covered here, please feel free to{" "}
            <Link
              href="/contact"
              style={{ color: "#facc15", textDecoration: "underline" }}
            >
              contact us directly
            </Link>
            .
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

        {/* General */}
        <section style={section}>
          <h2 style={h2}>1. General questions</h2>

          <div style={faqItem}>
            <div style={question}>
              Q1. What is the difference between the AIFA competition and the
              Violin Grade Exam?
            </div>
            <div style={answer}>
              The{" "}
              <strong>AIFA International Music Competition</strong> is a
              ranking-style event with prizes and publicity. The{" "}
              <strong>Violin Grade Exam</strong> is a step-by-step exam system
              focusing on feedback, clear levels, and long-term development.
              Many students may use the exam as preparation before trying the
              competition.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>Q2. Who is the Violin Grade Exam for?</div>
            <div style={answer}>
              It is mainly designed for{" "}
              <strong>children and young players</strong> who are still building
              their basics. However, older beginners are also welcome as long as
              they are comfortable being evaluated at the appropriate level.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>Q3. Do we need a teacher to apply?</div>
            <div style={answer}>
              Having a teacher is strongly recommended, but not strictly
              required. Parents and self-taught students can also apply. In the
              entry form, you can simply leave the teacher field blank or write
              &quot;self-directed&quot; if you are learning on your own.
            </div>
          </div>
        </section>

        {/* Levels & pieces */}
        <section style={section}>
          <h2 style={h2}>2. Levels, pieces, and syllabus</h2>

          <div style={faqItem}>
            <div style={question}>
              Q4. How do I know which grade level to choose?
            </div>
            <div style={answer}>
              Please read the{" "}
              <Link
                href="/violin-exam/syllabus"
                style={{ color: "#facc15", textDecoration: "underline" }}
              >
                syllabus page
              </Link>{" "}
              and discuss with your teacher. If you are unsure, we recommend
              choosing a slightly easier grade rather than a very difficult one.
              Passing a comfortable grade and then moving up is usually more
              motivating for children.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q5. Are the pieces fixed, like in ABRSM or other systems?
            </div>
            <div style={answer}>
              Our plan is to provide{" "}
              <strong>suggested pieces and level guidelines</strong> rather than
              a fully fixed list. Teachers may choose equivalent pieces if they
              fit the technical and musical goals of the grade. We want the
              exam to support your existing repertoire, not limit it.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q6. Do I have to play scales and technical exercises?
            </div>
            <div style={answer}>
              For the earliest grades, the focus is mainly on short pieces and
              basic posture. From the{" "}
              <strong>Foundation and Intermediate bands</strong>, simple scales
              and patterns may be required as part of the exam. Details will be
              written clearly in the final syllabus.
            </div>
          </div>
        </section>

        {/* Video & recording */}
        <section style={section}>
          <h2 style={h2}>3. Video &amp; recording</h2>

          <div style={faqItem}>
            <div style={question}>
              Q7. What kind of video quality do you need?
            </div>
            <div style={answer}>
              A modern smartphone or tablet is usually enough. We do{" "}
              <strong>not</strong> require professional cameras. The most
              important points are:
              <br />
              – The image is clear enough to see posture and bow arm
              <br />– The sound is not heavily distorted or overloaded
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q8. Can we edit the video or record in multiple takes?
            </div>
            <div style={answer}>
              We prefer <strong>one continuous take</strong> for each piece. It
              is fine to trim the start and end, but please avoid heavy editing,
              splicing different takes together, or using strong audio effects.
              Light noise reduction is acceptable if it does not change the real
              sound.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q9. How do we send the video to you?
            </div>
            <div style={answer}>
              After your application and payment are confirmed, we will send
              detailed instructions. In most cases, you will upload your video
              as <strong>&quot;unlisted&quot; on YouTube</strong> or send a{" "}
              <strong>cloud link</strong> (Google Drive, Dropbox, etc.). Please
              keep the video available until you receive the official result.
            </div>
          </div>
        </section>

        {/* Evaluation & results */}
        <section style={section}>
          <h2 style={h2}>4. Evaluation &amp; results</h2>

          <div style={faqItem}>
            <div style={question}>
              Q10. Who evaluates the Violin Grade Exam?
            </div>
            <div style={answer}>
              The exam is organised by the AIFA team. Evaluation will be carried
              out by experienced violinists and educators familiar with teaching
              children. For higher levels, we may also involve some of the
              competition jury members or advisors.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q11. What kind of feedback do we receive?
            </div>
            <div style={answer}>
              Each participant receives:
              <br />
              – A{" "}
              <strong>
                score sheet with separate marks for each category
              </strong>
              <br />
              – A{" "}
              <strong>radar chart</strong> showing strengths and weaker areas
              <br />– Short{" "}
              <strong>written comments</strong> focusing on the next steps in
              practice
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q12. Will we receive a certificate? Is it recognised?
            </div>
            <div style={answer}>
              Participants who pass their grade receive a{" "}
              <strong>digital certificate (PDF)</strong>. At the moment, this is
              a private exam system, not a government qualification, but it can
              be useful for personal records, school portfolios, or as proof of
              motivation and progress.
            </div>
          </div>
        </section>

        {/* Fees & policy */}
        <section style={section}>
          <h2 style={h2}>5. Fees, payment, and policies</h2>

          <div style={faqItem}>
            <div style={question}>Q13. How much does the exam cost?</div>
            <div style={answer}>
              The exact fees will be announced with each session. As a reference
              point, the current draft assumes a{" "}
              <strong>base fee of around 110 USD</strong> with possible
              discounts (early-bird, prize winner, etc.). Please see the{" "}
              <Link
                href="/violin-exam/fees"
                style={{ color: "#facc15", textDecoration: "underline" }}
              >
                Fees &amp; Schedule
              </Link>{" "}
              page for the latest information.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>Q14. Is the fee refundable?</div>
            <div style={answer}>
              Our planned policy is basically{" "}
              <strong>no refund after acceptance</strong>, because evaluation
              work starts soon after we receive the applications. Exceptions may
              be made only if we have to cancel a whole session for
              organisational reasons. The final terms will be clearly written on
              the Apply page.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q15. How do we pay? Do we need a PayPal account?
            </div>
            <div style={answer}>
              The pilot edition is planned to use{" "}
              <strong>PayPal for international payments</strong>. In many
              countries you can pay by card via PayPal without creating an
              account, but this depends on local rules. We will provide detailed
              instructions for each session.
            </div>
          </div>
        </section>

        {/* Other */}
        <section style={section}>
          <h2 style={h2}>6. Other questions</h2>

          <div style={faqItem}>
            <div style={question}>
              Q16. Can we use the same video for both the competition and the
              exam?
            </div>
            <div style={answer}>
              In principle, yes, as long as the repertoire and recording follow
              the rules of both events. However, the{" "}
              <strong>evaluation criteria are different</strong>: the competition
              focuses more on artistic impact and ranking, while the exam looks
              more closely at level-appropriate basics and overall balance.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>
              Q17. Will there be exams for other instruments?
            </div>
            <div style={answer}>
              At the moment, the pilot is{" "}
              <strong>violin-only (children and young players)</strong>. If it
              works well, we may consider adding cello, piano, or other
              instruments in the future, based on demand and available staff.
            </div>
          </div>

          <div style={faqItem}>
            <div style={question}>Q18. How can teachers stay informed?</div>
            <div style={answer}>
              If you are a teacher and would like to receive updates about the
              Violin Grade Exam (pilot dates, sample materials, etc.), please{" "}
              <Link
                href="/contact"
                style={{ color: "#facc15", textDecoration: "underline" }}
              >
                send us a short message
              </Link>{" "}
              with your name, country, and approximate number of students. We
              will do our best to keep you informed.
            </div>
          </div>

          <p style={{ ...subtle, marginTop: 14 }}>
            This FAQ will be updated as the project develops. We welcome
            feedback from teachers, parents, and young players about which
            questions should be added here.
          </p>

          <div style={buttonsRow}>
            <Link href="/violin-exam/apply" style={primaryButton}>
              Go to Apply page
            </Link>
            <Link href="/violin-exam" style={secondaryButton}>
              Back to Violin Exam top
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
