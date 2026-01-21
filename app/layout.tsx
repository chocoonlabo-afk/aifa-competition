// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import HeaderSwitcher from "./HeaderSwitcher";
import FooterSwitcher from "./FooterSwitcher";
import Script from "next/script";

// ★ここを NEXT_PUBLIC_GTAG_ID にする
const GA_ID = process.env.NEXT_PUBLIC_GTAG_ID;

export const metadata = {
  title: "AIFA International Music Competition",
  description: "Global stage for the next-generation musicians.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            {/* GA4 本体読み込み */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            {/* 初期化スクリプト */}
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
          background: "#050816",
          color: "#e5e7eb",
        }}
      >
        <HeaderSwitcher />
        <main>{children}</main>
        <FooterSwitcher />
      </body>
    </html>
  );
}
