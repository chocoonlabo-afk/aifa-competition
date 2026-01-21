// app/violin-exam/free-downloads/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { pdfItems, PdfCategory, PdfItem } from "./pdfItems";

const categoryTabs: { key: PdfCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "music", label: "Music" },
  { key: "learning", label: "Learning" },
  { key: "planner", label: "Planner" },
  { key: "note", label: "Note / Paper" },
];

export default function FreeDownloadsPage() {
  const [category, setCategory] = useState<(PdfCategory | "all")>("music");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    let list: PdfItem[] =
      category === "all"
        ? pdfItems
        : pdfItems.filter((item) => item.category === category);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((item) => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.titleJa.toLowerCase().includes(q) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }

    // カテゴリ別に表示順を整えたい場合はここで sort
    return list.sort((a, b) => a.id - b.id);
  }, [category, query]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">
          Free Printable Sheets for Young Musicians & Learners
        </h1>
        <p className="text-sm text-gray-600 mb-1">
          Download free PDFs for music practice, early learning, and planning.
          No sign-up required. You can print these for personal or classroom
          use.
        </p>
        <p className="text-xs text-gray-500">
          ※ 個人利用・レッスン利用は自由です。二次配布・再販売などはご遠慮ください。
        </p>
      </header>

      {/* カテゴリタブ */}
      <section className="mb-6 flex flex-wrap gap-2">
        {categoryTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setCategory(tab.key)}
            className={`px-3 py-1 text-sm rounded-full border transition ${
              category === tab.key
                ? "bg-black text-white border-black"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* 検索ボックス */}
      <section className="mb-6">
        <input
          type="text"
          placeholder="Search by title, tag, or Japanese name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-md border px-3 py-2 text-sm"
        />
      </section>

      {/* 一覧 */}
      <section>
        {filteredItems.length === 0 ? (
          <p className="text-sm text-gray-500">
            No items found. Try a different category or keyword.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const href = `/pdfs/${item.fileName}.pdf`; // public/pdfs 配下

              return (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-lg border p-4"
                >
                  <div>
                    <h2 className="mb-1 text-sm font-semibold">
                      {item.title}
                    </h2>
                    <p className="mb-2 text-xs text-gray-500">
                      {item.titleJa}
                    </p>
                    <p className="mb-1 text-[11px] text-gray-500">
                      {item.size} ・ {item.series} ・{" "}
                      {item.category === "music"
                        ? "Music"
                        : item.category === "learning"
                        ? "Learning"
                        : item.category === "planner"
                        ? "Planner"
                        : "Note"}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-2 py-[2px] text-[10px] text-gray-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <Link
                      href={href}
                      target="_blank"
                      className="inline-flex w-full items-center justify-center rounded-md border px-3 py-2 text-xs font-medium hover:bg-gray-50"
                    >
                      Download PDF
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* AIFA / Violin Exam への導線（軽く） */}
      <section className="mt-10 rounded-lg border bg-gray-50 px-4 py-4 text-sm">
        <h2 className="mb-1 text-base font-semibold">
          Looking for structured goals?
        </h2>
        <p className="mb-2">
          These printables are designed to support{" "}
          <strong>AIFA International Music Competition</strong> and the{" "}
          <strong>AIFA Violin Exam</strong> system. If your child loves setting
          goals, stamps, and practice charts, the Violin Exam may be a perfect
          next step.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/violin-exam"
            className="inline-flex items-center justify-center rounded-md border bg-white px-3 py-2 text-xs font-medium hover:bg-gray-100"
          >
            Learn more about AIFA Violin Exam
          </Link>
          <Link
            href="/competition"
            className="inline-flex items-center justify-center rounded-md border bg-white px-3 py-2 text-xs font-medium hover:bg-gray-100"
          >
            Go to AIFA International Music Competition
          </Link>
        </div>
      </section>
    </main>
  );
}
