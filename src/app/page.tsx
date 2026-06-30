import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
};

export default async function Home() {
  const { data: reviews } = await supabase
    .from("reviews")
    .select("id, name, rating, review")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold mb-4">
              Helsesekretær • Livsstil • Forebyggende helse
            </p>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Veiledning for bedre helse, gode vaner og varige
              livsstilsendringer
            </h1>

            <p className="text-gray-600 mb-8 leading-7">
              Generell livsstilsveiledning med fokus på forebyggende helse,
              motivasjon, gode rutiner og sunnere hverdagsvaner. Målet er å
              støtte mennesker som ønsker realistiske og varige endringer i
              hverdagen.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/bestill"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
              >
                Bestill konsultasjon
              </Link>

              <Link
                href="/review"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50"
              >
                Gi vurdering
              </Link>

              <Link
                href="/om-meg"
                className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100"
              >
                Les mer
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Veiledningen er ikke medisinsk behandling, diagnose eller
              erstatning for lege eller annet autorisert helsepersonell.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/farzana.jpg"
              alt="Farzana Naseri"
              width={420}
              height={300}
              className="rounded-xl shadow-xl mb-6"
            />

            <div className="bg-gray-50 p-8 rounded-2xl shadow w-full">
              <h2 className="text-2xl font-bold mb-4">Farzana Naseri</h2>

              <p className="text-gray-600 mb-4 leading-7">
                Helsesekretær med interesse for ernæring, livsstil,
                forebyggende helse og helsefremmende arbeid.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✓ Erfaring fra helsesektoren</li>
                <li>✓ Interesse for ernæring og livsstil</li>
                <li>✓ Fokus på motivasjon og gode rutiner</li>
                <li>✓ Fokus på forebyggende helse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tjenester og fokusområder
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">Livsstilsveiledning</h3>
            <p className="text-gray-600 leading-7">
              Veiledning for bedre hverdagsrutiner, struktur og sunne valg i
              hverdagen.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">Forebyggende helse</h3>
            <p className="text-gray-600 leading-7">
              Fokus på gode vaner, aktivitet, søvn, kosthold på generelt nivå
              og livskvalitet.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-3">Motivasjon og vaner</h3>
            <p className="text-gray-600 leading-7">
              Støtte og oppfølging for personer som ønsker realistiske og
              positive livsstilsendringer.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Vurderinger</h2>
          <p className="text-gray-600 mt-4">
            Tilbakemeldinger fra personer som har mottatt veiledning.
          </p>
        </div>

        {reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((item: Review) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="text-yellow-500 text-2xl mb-3">
                  {"★".repeat(item.rating)}
                </div>

                <p className="italic text-gray-600 mb-6">
                  "{item.review}"
                </p>

                <h3 className="font-semibold">
                  {item.name || "Anonym klient"}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Ingen publiserte vurderinger ennå.
          </p>
        )}

        <div className="text-center mt-10">
          <Link
            href="/review"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
          >
            Legg igjen en vurdering
          </Link>
        </div>
      </section>

      <section className="bg-green-700 text-white py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Klar til å ta det første steget mot en sunnere hverdag?
          </h2>

          <p className="text-lg mb-8 leading-8">
            Ta kontakt for en uforpliktende samtale om hvordan du kan få støtte
            og veiledning til bedre vaner, motivasjon og varige
            livsstilsendringer.
          </p>

          <Link
            href="/bestill"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100"
          >
            Bestill konsultasjon
          </Link>

          <p className="text-sm text-green-100 mt-6">
            Ikke send sensitive helseopplysninger i skjemaet.
          </p>
        </div>
      </section>
    </main>
  );
}