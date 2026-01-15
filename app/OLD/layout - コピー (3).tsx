import "./globals.css";
import { ReactNode } from "react";
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
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: "#f5f7fb",
          color: "#151827",
        }}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
