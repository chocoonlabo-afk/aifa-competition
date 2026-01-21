"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { pdfItems, type PdfCategory, type PdfItem } from "./pdfItems";
import styles from "./free-downloads.module.css";

const categoryTabs: { key: PdfCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "music", label: "Music" },
  { key: "learning", label: "Learning" },
  { key: "planner", label: "Planner" },
  { key: "note", label: "Note / Paper" },
];

function getSizeLabel(size: PdfItem["size"]): string {
  // Excel では「A4縦」「A4横」になっている想定
  if (size === "A4縦") return "A4 · Portrait";
  if (size === "A4横") return "A4 · Landscape";
  return size;
}

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
    <main className={styles.container}>
      {/* HERO */}
      <header className={styles.hero}>
        <p className={styles.heroLabel}>RESOURCES</p>
        <h1 className={styles.heroTitle}>
          Free Printable Sheets for Young Musicians &amp; Learners
        </h1>
        <p className={styles.heroText}>
          Download free PDFs for music practice, early learning, and planning.
          No sign-up required. You can print these for personal or studio use.
        </p>
        <p className={styles.heroNote}>
          Personal, home, and lesson use allowed. Please do not redistribute or
          resell these files.
        </p>
      </header>

      {/* NOTIFY (Google Form) */}
      <section className={styles.notifySection}>
        <p className={styles.notifyText}>
          Want to know when new printables are released?
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeQNy94liaPkDzGdP8jKE8RB1QvsTuGunaMhw-k7nfhNkb36A/viewform" // ← あなたのGoogleフォームURLに変更
          target="_blank"
          rel="noopener noreferrer"
          className={styles.notifyButton}
        >
          Get notified when new sheets are added
        </Link>
      </section>

      {/* CATEGORY TABS */}
      <section className={styles.tabsSection}>
        <div className={styles.tabs}>
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setCategory(tab.key)}
              className={
                category === tab.key
                  ? `${styles.tab} ${styles.tabActive}`
                  : styles.tab
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* SEARCH */}
      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search by title or tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        {filteredItems.length === 0 ? (
          <p className={styles.emptyMessage}>
            No items found. Try a different category or keyword.
          </p>
        ) : (
          <div className={styles.grid}>
            {filteredItems.map((item) => {
              const pdfHref = `/pdfs/${item.fileName}.pdf`;
              const previewSrc = `/pdf-previews/${item.fileName}.png`;

              return (
                <article key={item.id} className={styles.card}>
                  <div className={styles.cardPreview}>
                    <img
                      src={previewSrc}
                      alt={`${item.title} preview`}
                      className={styles.cardImage}
                      onError={(e) => {
                        // プレビュー画像が未用意でもレイアウトが崩れないように非表示
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <p className={styles.cardMeta}>
                      {getSizeLabel(item.size)} · {item.series} ·{" "}
                      {item.category === "music"
                        ? "Music"
                        : item.category === "learning"
                        ? "Learning"
                        : item.category === "planner"
                        ? "Planner"
                        : "Note"}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className={styles.tags}>
                        {item.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={styles.cardActions}>
                      <Link
                        href={pdfHref}
                        target="_blank"
                        className={styles.downloadButton}
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

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          Want a structured path beyond free printables?
        </h2>
        <p className={styles.ctaText}>
          These sheets are designed to support healthy practice habits for young
          players. If your child enjoys tracking progress with goals, calendars,
          and stamp sheets, the AIFA Violin Grade Exam can provide a clear,
          small-step pathway for long-term growth.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/violin-exam" className={styles.ctaPrimary}>
            Learn more about AIFA Violin Exam
          </Link>
          <Link href="/competition" className={styles.ctaSecondary}>
            Go to AIFA Competition
          </Link>
        </div>
      </section>
    </main>
  );
}
