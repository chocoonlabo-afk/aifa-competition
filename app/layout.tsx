// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import HeaderSwitcher from "./HeaderSwitcher";
import FooterSwitcher from "./FooterSwitcher";

export const metadata = {
  title: "AIFA International Music Competition",
  description: "Global stage for the next-generation musicians.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
          background: "#050816", // ネイビー系
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
