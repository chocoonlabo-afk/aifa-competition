// app/FooterSwitcher.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import ViolinExamFooter from "./violin-exam-footer";

export default function FooterSwitcher() {
  const pathname = usePathname();
  const isExam = pathname?.startsWith("/violin-exam");

  // /violin-exam 配下 → 検定フッター
  // それ以外 → 既存コンペフッター（footer.tsx）
  return isExam ? <ViolinExamFooter /> : <Footer />;
}
