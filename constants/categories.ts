/**
 * AIMC Category Definitions (V1.0)
 *
 * - 初年度はバイオリンのみ
 * - 部門IDは将来の DB / AI / 審査アプリで利用するため不変
 */

export type Category = {
  id: string;             // 固定ID（不変）
  instrument: string;     // 楽器
  labelEn: string;        // 英語表示用
  labelJa: string;        // 日本語表示用
  descriptionEn: string;  // 部門説明
  descriptionJa: string;
  minAge?: number;        // 任意：年齢制限（今後追加の可能性）
  maxAge?: number;
  courses?: string[];     // 任意：A/B/C などのコース設定
};

export const categories: Category[] = [
  {
    id: "violin-junior",
    instrument: "violin",
    labelEn: "Violin Junior Division",
    labelJa: "ヴァイオリン ジュニア部門",
    descriptionEn: "For younger violinists competing in beginner to intermediate levels.",
    descriptionJa: "若いヴァイオリン奏者を対象とした初級〜中級レベルの部門です。",
    // 年齢基準が必要になればここに追加できる
    // minAge: 0,
    // maxAge: 12,
    courses: [], // 初年度は自由曲なのでコースなし
  },
  {
    id: "violin-senior",
    instrument: "violin",
    labelEn: "Violin Senior Division",
    labelJa: "ヴァイオリン シニア部門",
    descriptionEn: "For advanced young violinists aiming for higher artistic performance.",
    descriptionJa: "高い芸術性を目指す上級レベルの若いヴァイオリニストを対象とした部門です。",
    courses: [],
  },
];
