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
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="/images/farzana.jpg"
              alt="Farzana Naseri"
              width={520}
              height={420}
              priority
              className="w-full max-w-md rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div className="order-2 md:order-1">
            <p className="text-green-700 font-semibold mb-4 text-base md:text-lg">
              Helsesekretær • Livsstil • Forebyggende helse
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              Veiledning for bedre helse, gode vaner og varige
              livsstilsendringer
            </h1>

            <p className="text-gray-600 mb-8 text-lg leading-8">
              Generell livsstilsveiledning med fokus på forebyggende helse,
              motivasjon, gode rutiner og sunnere hverdagsvaner. Målet er å
              støtte mennesker som ønsker realistiske og varige endringer i
              hverdagen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/bestill"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 text-center"
              >
                Bestill konsultasjon
              </Link>

              <Link
                href="/review"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 text-center"
              >
                Gi vurdering
              </Link>

              <Link
                href="/om-meg"
                className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 text-center"
              >
                Les mer
              </Link>
            </div>

            <p className="text-sm text-gray-500 leading-6">
              Veiledningen er ikke medisinsk behandling, diagnose eller
              erstatning for lege eller annet autorisert helsepersonell.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Farzana Naseri
          </h2>

          <p className="text-gray-600 mb-4 leading-8">
            Helsesekretær med interesse for ernæring, livsstil, forebyggende
            helse og helsefremmende arbeid.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✓ Erfaring fra helsesektoren</li>
            <li>✓ Interesse for ernæring og livsstil</li>
            <li>✓ Fokus på motivasjon og gode rutiner</li>
            <li>✓ Fokus på forebyggende helse</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
          Tjenester og fokusområder
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-3 text-xl">Helserådgivning</h3>
            <p className="text-gray-600 leading-7">
              Veiledning med fokus på forebyggende helse, bedre rutiner og økt
              livskvalitet.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-3 text-xl">Livsstilsveiledning</h3>
            <p className="text-gray-600 leading-7">
              Hjelp til å etablere gode vaner, sunnere hverdagsrutiner og mer
              balanse i hverdagen.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-bold mb-3 text-xl">Motivasjon</h3>
            <p className="text-gray-600 leading-7">
              Oppfølging og støtte for personer som ønsker realistiske og varige
              positive endringer.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Vurderinger
          </h2>
          <p className="text-gray-600 mt-4">
            Tilbakemeldinger fra personer som har mottatt veiledning.
          </p>
        </div>

        {reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-8 border"
              >
                <div className="text-yellow-500 text-2xl mb-3">
                  {"★".repeat(item.rating)}
                </div>

                <p className="italic text-gray-600 mb-6 leading-7">
                  "{item.review}"
                </p>

                <h3 className="font-semibold">
                  {item.name || "Anonym klient"}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>
              <p className="italic text-gray-600 mb-6 leading-7">
                "Farzana tok seg god tid til å lytte og ga praktiske råd som var
                enkle å følge."
              </p>
              <h3 className="font-semibold">Anonym klient</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>
              <p className="italic text-gray-600 mb-6 leading-7">
                "En trygg og motiverende veileder som gjorde det lettere å skape
                gode vaner."
              </p>
              <h3 className="font-semibold">Anonym klient</h3>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border">
              <div className="text-yellow-500 text-2xl mb-3">★★★★★</div>
              <p className="italic text-gray-600 mb-6 leading-7">
                "Profesjonell oppfølging og gode råd tilpasset min hverdag."
              </p>
              <h3 className="font-semibold">Anonym klient</h3>
            </div>
          </div>
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

      <section className="bg-green-700 text-white py-16 md:py-20 mt-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til å ta det første steget mot en sunnere livsstil?
          </h2>

          <p className="text-lg mb-8 leading-8">
            Ta kontakt for en uforpliktende samtale om hvordan du kan få støtte
            og veiledning til bedre helse og varige livsstilsendringer.
          </p>

          <Link
            href="/bestill"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100"
          >
            Bestill konsultasjon
          </Link>
        </div>
      </section>
    </main>
  );
}
