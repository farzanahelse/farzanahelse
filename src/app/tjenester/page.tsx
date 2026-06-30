export default function Tjenester() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Tjenester
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-7">
          Generell livsstilsveiledning med fokus på forebyggende helse,
          motivasjon, gode vaner og realistiske endringer i hverdagen.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Forebyggende helse
            </h2>
            <p className="text-gray-600 leading-7">
              Veiledning med fokus på gode rutiner, bedre livskvalitet og
              helsefremmende valg i hverdagen.
            </p>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Livsstilsveiledning
            </h2>
            <p className="text-gray-600 leading-7">
              Støtte til å bygge gode vaner innen kosthold på generelt nivå,
              aktivitet, søvn, struktur og hverdagsbalanse.
            </p>
          </div>

          <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Motivasjon og vaner
            </h2>
            <p className="text-gray-600 leading-7">
              Samtaler og oppfølging for personer som ønsker realistiske,
              positive og varige livsstilsendringer.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mt-12 text-center">
          <p className="text-gray-700 leading-7">
            Veiledningen er ikke medisinsk behandling, diagnose eller erstatning
            for lege eller annet autorisert helsepersonell.
          </p>
        </div>
      </section>
    </main>
  );
}