import "./globals.css";
import "./theme.css";

import { ReactNode } from "react";
import Header from "./header";

export const metadata = {
  title: "AIFA International Music Competition",
  description: "Global stage for the next-generation musicians.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* 共通ヘッダー */}
        <Header />

        {/* 各ページのコンテンツ */}
        <main>{children}</main>
      </body>
    </html>
  );
}
