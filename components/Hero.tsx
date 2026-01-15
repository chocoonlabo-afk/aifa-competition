export default function Hero() {
  return (
    <section className="w-full py-24 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        {/* 大会ロゴ */}
        <img
          src="/images/logo/aimc-logo.png"
          alt="AIMC Logo"
          className="mx-auto mb-6 w-40 h-auto"
        />

        <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-4">
          AIFA International Music Competition 2025
        </h1>

        <button className="px-10 py-3 mt-6 text-lg font-semibold text-white bg-yellow-600 hover:bg-yellow-700 rounded-full shadow-lg transition">
          ENTRY
        </button>
      </div>
    </section>
  );
}
