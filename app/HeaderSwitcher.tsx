// app/HeaderSwitcher.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import ViolinExamHeader from "./violin-exam-header";

export default function HeaderSwitcher() {
  const pathname = usePathname();
  const isExam = pathname?.startsWith("/violin-exam");

  // /violin-exam 配下 → 検定ヘッダー
  // それ以外 → コンペ用ヘッダー
  return isExam ? <ViolinExamHeader /> : <Header />;
}
