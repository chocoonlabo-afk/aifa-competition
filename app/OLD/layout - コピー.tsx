import "./globals.css";
import "./theme.css";


import { ReactNode } from "react";

export const metadata = {
  title: "AIFA International Music Competition",
  description: "Global stage for the next-generation musicians.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 必要なら Header をここに設置 */}
        {children}
      </body>
    </html>
  );
}
