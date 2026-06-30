"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Stethoscope,
  HeartPulse,
  Apple,
  Target,
  ChevronDown,
} from "lucide-react";

const cards = [
  {
    title: "Erfaring",
    subtitle: "Helsesekretær",
    icon: Stethoscope,
    details: [
      "Erfaring fra helsesektoren",
      "Pasientkontakt og kommunikasjon",
      "Administrativt arbeid",
      "Trygg og profesjonell oppfølging",
    ],
  },
  {
    title: "Fokus",
    subtitle: "Forebyggende helse",
    icon: HeartPulse,
    details: [
      "Gode hverdagsrutiner",
      "Motivasjon og mestring",
      "Realistiske livsstilsendringer",
      "Helsefremmende valg i hverdagen",
    ],
  },
  {
    title: "Livsstil",
    subtitle: "Kosthold og sunne vaner",
    icon: Apple,
    details: [
      "Kosthold på generelt nivå",
      "Sunnere matvalg",
      "Balansert hverdag",
      "Langsiktige vaner",
    ],
  },
  {
    title: "Mitt mål",
    subtitle: "Støtte til bedre vaner",
    icon: Target,
    details: [
      "Støtte mennesker til varige endringer",
      "Skape trygghet og motivasjon",
      "Gi praktisk og forståelig veiledning",
      "Bidra til bedre livskvalitet",
    ],
  },
];

export default function OmMeg() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/farzana.jpg"
              alt="Farzana Naseri"
              width={450}
              height={550}
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-green-700 mb-6">
              Om Farzana Naseri
            </h1>

            <p className="text-gray-600 mb-6 leading-8">
              Jeg er helsesekretær med interesse for forebyggende helse,
              livsstil og gode hverdagsvaner. Målet mitt er å motivere og
              støtte mennesker som ønsker realistiske og varige endringer.
            </p>

            <p className="text-gray-600 mb-8 leading-8">
              Gjennom generell livsstilsveiledning ønsker jeg å bidra med
              støtte, motivasjon og praktiske råd som passer den enkeltes
              hverdag og livssituasjon.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((card, index) => {
                const Icon = card.icon;
                const isOpen = openCard === index;

                return (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => setOpenCard(isOpen ? null : index)}
                    className="text-left bg-green-50 hover:bg-green-100 rounded-2xl p-5 transition shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Icon className="w-9 h-9 text-green-700 mb-3" />
                        <h3 className="font-bold text-green-700">
                          {card.title}
                        </h3>
                        <p className="text-gray-700">{card.subtitle}</p>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 text-green-700 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {isOpen && (
                      <ul className="mt-4 space-y-2 text-gray-700">
                        {card.details.map((detail) => (
                          <li key={detail}>✓ {detail}</li>
                        ))}
                      </ul>
                    )}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Veiledningen er ikke medisinsk behandling, diagnose eller
              erstatning for lege eller annet autorisert helsepersonell.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}