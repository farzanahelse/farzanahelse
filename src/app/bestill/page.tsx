"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Slot = {
  id: string;
  slot_date: string;
  slot_time: string;
};

export default function Bestill() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [status, setStatus] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    async function fetchSlots() {
      const { data, error } = await supabase
        .from("available_slots")
        .select("id, slot_date, slot_time")
        .eq("is_active", true)
        .order("slot_date", { ascending: true })
        .order("slot_time", { ascending: true });

      if (!error && data) {
        setSlots(data);

        if (data.length > 0) {
          setCurrentMonth(new Date(data[0].slot_date + "T00:00:00"));
        }
      }
    }

    fetchSlots();
  }, []);

  const availableDates = [...new Set(slots.map((slot) => slot.slot_date))];

  const slotsForSelectedDate = slots.filter(
    (slot) => slot.slot_date === selectedDate
  );

  function getDaysInMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days: (Date | null)[] = [];

    const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }

  function formatDateForDatabase(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function formatMonth(date: Date) {
    return date.toLocaleDateString("no-NO", {
      month: "long",
      year: "numeric",
    });
  }

  function formatSelectedDate(date: string) {
    return new Date(date + "T00:00:00").toLocaleDateString("no-NO", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function formatTime(time: string) {
    return time.slice(0, 5);
  }

  function previousMonth() {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
    setSelectedDate("");
    setSelectedSlot("");
    setStatus("");
  }

  function nextMonth() {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
    setSelectedDate("");
    setSelectedSlot("");
    setStatus("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedSlot) {
      setStatus("Velg en ledig tid først.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const { error } = await supabase.from("bookings").insert([
      {
        slot_id: selectedSlot,
        name,
        phone,
        email,
        message,
      },
    ]);

    if (error) {
      setStatus("Noe gikk galt. Tiden kan allerede være booket.");
      return;
    }

    setStatus("Takk! Din forespørsel er sendt.");

    form.reset();
    setSelectedSlot("");
    setSelectedDate("");
    setSlots(slots.filter((slot) => slot.id !== selectedSlot));
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Bestill konsultasjon
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Velg en ledig dato i kalenderen, velg tidspunkt og fyll ut skjemaet.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-green-50 border rounded-2xl p-6">
            <div className="flex justify-between items-center mb-8">
              <button
                type="button"
                onClick={previousMonth}
                className="border px-4 py-2 rounded-lg bg-white hover:bg-green-100"
              >
                ←
              </button>

              <h2 className="text-2xl font-bold text-green-700 capitalize">
                {formatMonth(currentMonth)}
              </h2>

              <button
                type="button"
                onClick={nextMonth}
                className="border px-4 py-2 rounded-lg bg-white hover:bg-green-100"
              >
                →
              </button>
            </div>

            <div
              className="mb-3 text-center font-semibold text-gray-600"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "8px",
              }}
            >
              <div>Man</div>
              <div>Tir</div>
              <div>Ons</div>
              <div>Tor</div>
              <div>Fre</div>
              <div>Lør</div>
              <div>Søn</div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "8px",
              }}
            >
              {getDaysInMonth(currentMonth).map((day, index) => {
                if (!day) {
                  return <div key={index} className="h-12"></div>;
                }

                const dateString = formatDateForDatabase(day);
                const hasAvailableSlot = availableDates.includes(dateString);
                const isSelected = selectedDate === dateString;

                return (
                  <button
                    key={dateString}
                    type="button"
                    disabled={!hasAvailableSlot}
                    onClick={() => {
                      setSelectedDate(dateString);
                      setSelectedSlot("");
                      setStatus("");
                    }}
                    className={`h-12 rounded-lg border text-sm transition ${
                      isSelected
                        ? "bg-green-700 text-white border-green-700 font-bold"
                        : hasAvailableSlot
                        ? "bg-white hover:bg-green-100 border-green-400 font-bold text-green-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {day.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-green-700 mb-4">
                Ledige tider
              </h3>

              {selectedDate ? (
                <>
                  <p className="font-semibold mb-4 capitalize">
                    {formatSelectedDate(selectedDate)}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {slotsForSelectedDate.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => {
                          setSelectedSlot(slot.id);
                          setStatus("");
                        }}
                        className={`border rounded-lg p-3 transition ${
                          selectedSlot === slot.id
                            ? "bg-green-700 text-white border-green-700"
                            : "bg-white hover:bg-green-100"
                        }`}
                      >
                        {formatTime(slot.slot_time)}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-gray-600">
                  Velg en grønn dato i kalenderen.
                </p>
              )}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border rounded-2xl shadow-sm p-8 space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Fullt navn"
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Telefonnummer"
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="E-post"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Kort beskjed. Ikke send sensitive helseopplysninger."
              className="w-full border p-3 rounded-lg h-32"
            />

            <div className="text-sm text-gray-600 bg-gray-50 border rounded-lg p-4">
              Veiledningen er ikke medisinsk behandling, diagnose eller
              erstatning for lege eller annet autorisert helsepersonell.
            </div>

            <button
              type="submit"
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
            >
              Send forespørsel
            </button>

            {status && (
              <p className="text-green-700 font-semibold mt-4">{status}</p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}