import "./globals.css";
import type { ReactNode } from "react";
import Header from "./header";

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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
