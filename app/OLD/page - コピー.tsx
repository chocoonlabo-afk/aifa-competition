export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-bold mb-6">
          AIFA International Music Competition
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Online / Global / AI-supported Evaluation
        </p>

        <a
          href="/apply"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Apply Now
        </a>
      </section>

      {/* Why AIMC Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why AIMC ?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold mb-2">Global Online Competition</h3>
            <p className="text-sm text-gray-600">
              Perform from anywhere and reach international audiences.
            </p>
          </li>

          <li className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold mb-2">AI-assisted Evaluation</h3>
            <p className="text-sm text-gray-600">
              Objective evaluation support with expert human judges.
            </p>
          </li>

          <li className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold mb-2">Affordable Entry Fee</h3>
            <p className="text-sm text-gray-600">
              Only ¥9,800 per entry — designed for accessibility.
            </p>
          </li>
        </ul>
      </section>

      {/* Schedule Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Competition Schedule
        </h2>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Application Period:</strong> July 2026
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Result Announcement:</strong> August 2026
          </p>

          <a
            href="/guidelines"
            className="inline-block mt-4 bg-gray-900 text-white font-semibold px-6 py-2 rounded shadow hover:bg-gray-700 transition"
          >
            View Guidelines
          </a>
        </div>
      </section>

      {/* Past Results Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Past Results
        </h2>

        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-600 mb-6">
            See award-winning performances from past participants.
          </p>

          <a
            href="/results"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-2 rounded shadow hover:bg-indigo-700 transition"
          >
            View Results
          </a>
        </div>
      </section>
    </main>
  );
}
