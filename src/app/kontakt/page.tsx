export default function Kontakt() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Kontakt
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Ta kontakt for spørsmål, veiledning eller avtale om konsultasjon.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>

            <p className="mb-4">
              <strong>Telefon:</strong><br />
              +47 45 80 24 54
            </p>

            <p className="mb-4">
              <strong>E-post:</strong><br />
              post@farzanahelse.no
            </p>

            <p>
              <strong>Åpningstid:</strong><br />
              Etter Avtale
            </p>
          </div>

          <div className="bg-green-700 text-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Ønsker du konsultasjon?
            </h2>

            <p className="mb-6">
              Bestill en uforpliktende samtale, så tar vi kontakt for å finne et passende tidspunkt.
            </p>

            <a
              href="/bestill"
              className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Bestill konsultasjon
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
    Finn oss
  </h2>

  <div className="rounded-2xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps?q= Åskollen,3039 Drammen,Norway&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    ></iframe>
  </div>
</section>
    </main>
  );
}