export default function JuryPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">審査員 / Jury</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 審査員カード（後で追加可能） */}
        <div className="text-center">
          <div className="w-40 h-40 bg-gray-200 mx-auto mb-4 rounded-full" />
          <h2 className="text-xl font-bold">Judge Name</h2>
          <p className="text-sm text-gray-600">Speciality / Country</p>
        </div>

        <div className="text-center">
          <div className="w-40 h-40 bg-gray-200 mx-auto mb-4 rounded-full" />
          <h2 className="text-xl font-bold">Judge Name</h2>
          <p className="text-sm text-gray-600">Speciality / Country</p>
        </div>
      </div>
    </main>
  );
}
