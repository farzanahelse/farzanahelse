"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Review() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const rating = Number(formData.get("rating"));
    const review = formData.get("review") as string;

    const { error } = await supabase.from("reviews").insert([
      {
        name,
        email,
        rating,
        review,
        approved: false,
      },
    ]);

    if (error) {
      setStatus("Noe gikk galt. Prøv igjen.");
      return;
    }

    setStatus("Takk! Vurderingen er sendt og blir gjennomgått før publisering.");
    form.reset();
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Gi vurdering
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Del din erfaring. Vurderingen blir gjennomgått før den eventuelt
          publiseres på nettsiden.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-xl shadow-sm p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Navn eller Anonym"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="E-post (vises ikke offentlig)"
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="rating"
            required
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Velg vurdering</option>
            <option value="5">★★★★★ 5 stjerner</option>
            <option value="4">★★★★ 4 stjerner</option>
            <option value="3">★★★ 3 stjerner</option>
            <option value="2">★★ 2 stjerner</option>
            <option value="1">★ 1 stjerne</option>
          </select>

          <textarea
            name="review"
            placeholder="Skriv din vurdering her"
            required
            className="w-full border p-3 rounded-lg h-32"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
          >
            Send vurdering
          </button>

          {status && (
            <p className="text-green-700 font-semibold mt-4">{status}</p>
          )}
        </form>
      </section>
    </main>
  );
}