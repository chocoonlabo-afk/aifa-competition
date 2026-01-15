export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Hero Section */}
      <section className="mx-auto mb-20 max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
          AIFA International Music Competition
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Online &amp; Global competition with AI-supported evaluation and
          expert jury.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="/apply"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
          <a
            href="/categories"
            className="inline-block rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:border-gray-500 hover:text-gray-900 transition"
          >
            View Categories &amp; Rules
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Application period and detailed schedule may be updated. Please check
          this site regularly.
        </p>
      </section>

      {/* Why AIFA Section */}
      <section className="mx-auto mb-20 max-w-5xl">
        <h2 className="mb-6 text-center text-3xl font-semibold">Why AIFA?</h2>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <li className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold">Global Online Competition</h3>
            <p className="text-sm text-gray-600">
              Perform from anywhere in the world. All rounds are based on video
              submissions.
            </p>
          </li>

          <li className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold">AI-supported Evaluation</h3>
            <p className="text-sm text-gray-600">
              AI analysis assists experienced jury members, offering both
              objective data and musical insight.
            </p>
          </li>

          <li className="rounded-lg bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold">Accessible &amp; Transparent</h3>
            <p className="text-sm text-gray-600">
              Clear rules, reasonable fees, and feedback-focused results to
              support young musicians&apos; growth.
            </p>
          </li>
        </ul>
      </section>

      {/* Schedule Section */}
      <section className="mx-auto mb-20 max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Competition Schedule
        </h2>

        <div className="rounded-lg bg-white p-6 text-center shadow">
          <p className="mb-4 text-lg text-gray-700">
            <strong>Application Period:</strong> July 2026 (planned)
          </p>
          <p className="mb-4 text-lg text-gray-700">
            <strong>Result Announcement:</strong> August 2026 (planned)
          </p>

          <a
            href="/guidelines"
            className="mt-4 inline-block rounded bg-gray-900 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700 transition"
          >
            View Guidelines
          </a>
        </div>
      </section>

      {/* Results / Winners Section */}
      <section className="mx-auto mb-20 max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Winners &amp; Results
        </h2>

        <div className="rounded-lg bg-white p-6 text-center shadow">
          <p className="mb-6 text-gray-600">
            Awarded performances and prize winners of each edition will be
            listed here.
          </p>

          <a
            href="/results"
            className="inline-block rounded bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
          >
            View Results
          </a>
        </div>
      </section>
    </main>
  );
}
