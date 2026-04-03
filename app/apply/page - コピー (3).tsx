"use client";

import type { CSSProperties } from "react";
import Script from "next/script";

export default function ApplyPage() {
  const wrapper: CSSProperties = {
    minHeight: "calc(100vh - 64px)",
    padding: "40px 16px 80px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  };

  const card: CSSProperties = {
    width: "100%",
    maxWidth: "900px",
    background:
      "radial-gradient(circle at 0% 0%, rgba(250,204,21,0.18), transparent 60%), #020617",
    borderRadius: "18px",
    padding: "28px 28px 36px",
    boxShadow: "0 18px 45px rgba(15,23,42,0.65)",
    border: "1px solid rgba(202,138,4,0.55)",
  };

  const title: CSSProperties = {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 18px",
    color: "#fefce8",
  };

  const h3: CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
    margin: "24px 0 12px",
    color: "#fefce8",
  };

  const p: CSSProperties = {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#e5e7eb",
  };

  const stepsWrap: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "18px",
  };

  const stepCard: CSSProperties = {
    border: "1px solid rgba(202,138,4,0.55)",
    borderRadius: "14px",
    padding: "18px 18px 20px",
    background: "rgba(15,23,42,0.6)",
  };

  const stepTitle: CSSProperties = {
    margin: "0 0 8px",
    fontWeight: 600,
    color: "#fefce8",
    fontSize: "15px",
  };

  const btnWrap: CSSProperties = {
    marginTop: "26px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  };

  const btn: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9999px",
    padding: "10px 22px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    border: "1px solid rgba(202,138,4,0.55)",
    color: "#fefce8",
    background: "rgba(15,23,42,0.85)",
    textDecoration: "none",
  };

  const primaryBtn: CSSProperties = {
    ...btn,
    background:
      "linear-gradient(90deg, rgba(250,204,21,0.9), rgba(245,158,11,0.9))",
    color: "#1c1917",
    border: "none",
  };

  const note: CSSProperties = {
    marginTop: "14px",
    fontSize: "12px",
    color: "#fbbf24",
  };

  const paymentGrid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "12px",
  };

  const paymentCard: CSSProperties = {
    borderRadius: "14px",
    border: "1px solid rgba(202,138,4,0.55)",
    padding: "14px 16px 18px",
    background: "rgba(15,23,42,0.9)",
  };

  const price: CSSProperties = {
    margin: "4px 0 10px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#facc15",
  };

  const small: CSSProperties = {
    fontSize: "12px",
    marginTop: "6px",
    color: "#e5e7eb",
  };

  return (
    <main style={wrapper}>
      {/* PayPal SDK 読み込み */}
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAAZ14LHlKNjiIutEHITDYC9Cz2GVgoG2LiN4qBJtPb6q7tTiWpQOT2CcD9izf9Pjhyn0Ayo0QKjXr3Ig&components=hosted-buttons&disable-funding=venmo&currency=USD"
        strategy="afterInteractive"
      />
      <Script
        id="paypal-hosted-buttons"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function renderHostedButtons() {
              if (!window.paypal || !paypal.HostedButtons) {
                setTimeout(renderHostedButtons, 200);
                return;
              }
              paypal.HostedButtons({
                hostedButtonId: "53KJFRG5XR8LA"
              }).render("#paypal-container-53KJFRG5XR8LA");
              paypal.HostedButtons({
                hostedButtonId: "BCHDRCV6H6PM8"
              }).render("#paypal-container-BCHDRCV6H6PM8");
              paypal.HostedButtons({
                hostedButtonId: "9NE36L8ZC5682"
              }).render("#paypal-container-9NE36L8ZC5682");
              paypal.HostedButtons({
                hostedButtonId: "BJLYR5ZKTYVZL"
              }).render("#paypal-container-BJLYR5ZKTYVZL");
            }
            renderHostedButtons();
          `,
        }}
      />

      <section style={card}>
        <h1 style={title}>How to Apply</h1>
        <p style={p}>
          Please follow the steps below to complete your application for the AIFA
          International Music Competition (2026 Spring Edition).
        </p>

        {/* Application dates */}
        <h2 style={h3}>Application Schedule (2026 Edition)</h2>
        <p style={p}>
          <strong>Entry period:</strong> January 15 — April 1 (based on
          international time zones)
          <br />
          <strong>Results announcement:</strong> around May 10 (subject to minor
          adjustments; any delays will be announced on this website)
        </p>

        {/* Steps */}
        <h2 style={h3}>Application Steps</h2>
        <div style={stepsWrap}>
          <div style={stepCard}>
            <h3 style={stepTitle}>Step 1 — Check Categories &amp; Rules</h3>
            <p style={p}>
              Review age groups, repertoire, and video guidelines to confirm
              your category.
            </p>
          </div>

          <div style={stepCard}>
            <h3 style={stepTitle}>Step 2 — Prepare Your Video</h3>
            <p style={p}>
              Record your performance and upload it to YouTube as{" "}
              <strong>Unlisted</strong>. Editing, audio replacement, or effects
              are not allowed.
            </p>
          </div>

          <div style={stepCard}>
            <h3 style={stepTitle}>Step 3 — Pay the Participation Fee</h3>
            <p style={p}>
              Choose the appropriate entry option and pay securely via{" "}
              <strong>PayPal</strong>. Please complete the payment before
              submitting the entry form.
            </p>
          </div>

          <div style={stepCard}>
            <h3 style={stepTitle}>Step 4 — Submit Entry Form</h3>
            <p style={p}>
              After payment, fill in the online entry form with your details,
              repertoire, and video link. For minors, a parent or guardian must
              provide consent for participation.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={btnWrap}>
          <a style={primaryBtn} href="#payment">
            Pay Entry Fee
          </a>
          <a style={btn} href="/entry">
            Go to Entry Form
          </a>
          <a style={btn} href="/categories">
            Categories &amp; Rules
          </a>
        </div>

        {/* Payment section */}
        <section id="payment" style={{ marginTop: "28px" }}>
          <h2 style={h3}>Pay Entry Fee (2026 Spring Edition)</h2>
          <p style={p}>
            Please select one option below. Early Bird and combined discounts
            apply based on the payment date. After payment, keep your PayPal
            transaction ID and enter it in the entry form.
          </p>

          <div style={paymentGrid}>
            <div style={paymentCard}>
              <h3 style={stepTitle}>Standard</h3>
              <p style={price}>US$110</p>
              <div id="paypal-container-53KJFRG5XR8LA" />
              <p style={small}>For regular entries.</p>
            </div>

            <div style={paymentCard}>
              <h3 style={stepTitle}>Early Bird</h3>
              <p style={price}>US$90</p>
              <div id="paypal-container-BCHDRCV6H6PM8" />
              <p style={small}>Available until February 28.</p>
            </div>

            <div style={paymentCard}>
              <h3 style={stepTitle}>Early Bird + 1st Prize Discount</h3>
              <p style={price}>US$85</p>
              <div id="paypal-container-9NE36L8ZC5682" />
              <p style={small}>
                For participants who have won 1st prize in another competition
                and pay by February 28.
              </p>
            </div>

            <div style={paymentCard}>
              <h3 style={stepTitle}>1st Prize Discount</h3>
              <p style={price}>US$105</p>
              <div id="paypal-container-BJLYR5ZKTYVZL" />
              <p style={small}>
                For participants who have won 1st prize in another competition
                (after the Early Bird period).
              </p>
            </div>
          </div>

          <p style={note}>
            Your application is complete only when{" "}
            <strong>both the payment and the entry form</strong> have been
            received.
          </p>
        </section>
      </section>
    </main>
  );
}
