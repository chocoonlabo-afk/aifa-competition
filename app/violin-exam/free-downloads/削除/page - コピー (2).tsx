// app/violin-exam/free-downloads/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pdfItems, type PdfCategory, type PdfItem } from "./pdfItems";

const categoryTabs: { key: PdfCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "music", label: "Music" },
  { key: "learning", label: "Learning" },
  { key: "planner", label: "Planner" },
  { key: "note", label: "Note / Paper" },
];

export default function FreeDownloadsPage() {
  const [category, setCategory] = useState<PdfCategory | "all">("music");
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
          item.tags?.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }

    return list.sort((a, b) => a.id - b.id);
  }, [category, query]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      {/* Hero / Heading – 他ページとトーンを合わせる */}
      <header className="mb-10">
        <p className="mb-2 text-xs font-medium tracking-[0.2em] text-amber-300/80">
          RESOURCES
        </p>
        <h1 className="mb-4 text-3xl font-semibold text-slate-50 md:text-4xl">
          Free Printable Sheets for Young Musicians & Learners
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Download free PDFs for music practice, early learning, and planning.
          No sign-up required. You can print these for personal or studio use.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Personal, home, and lesson use allowed. Please do not redistribute or
          resell these files.
        </p>
      </header>

      {/* Category Tabs */}
      <section className="mb-6 flex flex-wrap gap-2">
        {categoryTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setCategory(tab.key)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              category === tab.key
                ? "border-amber-400 bg-amber-400 text-slate-900"
                : "border-slate-600 bg-slate-900/40 text-slate-200 hover:bg-slate-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* Search */}
      <section className="mb-8">
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
      </section>

      {/* Grid */}
      <section>
        {filteredItems.length === 0 ? (
          <p className="text-sm text-slate-400">
            No items found. Try a different category or keyword.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const pdfHref = `/pdfs/${item.fileName}.pdf`;
              const previewSrc = `/pdf-previews/${item.fileName}.png`;

              return (
                <article
                  key={item.id}
                  className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/60 p-4 shadow-sm"
                >
                  {/* Preview */}
                  <div className="mb-3 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950">
                    <Image
                      src={previewSrc}
                      alt={`${item.title} preview`}
                      width={800}
                      height={600}
                      className="h-auto w-full object-contain"
                      onError={(e) => {
                        // プレビュー画像がまだ無い場合でもレイアウトが壊れないようにする
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-1 flex-col">
                    <div className="mb-3">
                      <h2 className="mb-1 text-sm font-semibold text-slate-50">
                        {item.title}
                      </h2>
                      <p className="text-[11px] uppercase tracking-wide text-slate-400">
                        {item.size} · {item.series} ·{" "}
                        {item.category === "music"
                          ? "Music"
                          : item.category === "learning"
                          ? "Learning"
                          : item.category === "planner"
                          ? "Planner"
                          : "Note"}
                      </p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-slate-800 px-2 py-[2px] text-[10px] text-slate-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        href={pdfHref}
                        target="_blank"
                        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-2 text-xs font-semibold text-slate-900 shadow hover:brightness-105"
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* AIFA / Violin Exam CTA */}
      <section className="mt-14 rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-5 text-sm text-slate-100">
        <h2 className="mb-2 text-base font-semibold">
          Want a structured path beyond free printables?
        </h2>
        <p className="mb-3 text-sm text-slate-300">
          These sheets are designed to support healthy practice habits for young
          players. If your child enjoys tracking progress with goals, calendars,
          and stamp sheets, the AIFA Violin Grade Exam can provide a clear,
          small-step pathway for long-term growth.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/violin-exam"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-2 text-xs font-semibold text-slate-900 shadow hover:brightness-105"
          >
            Learn more about AIFA Violin Exam
          </Link>
          <Link
            href="/competition"
            className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800"
          >
            Go to AIFA Competition
          </Link>
        </div>
      </section>
    </main>
  );
}
