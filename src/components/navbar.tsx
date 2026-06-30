"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-green-700">
          Naseri Helseveiledning
        </Link>

        <div className="hidden md:flex gap-4">
          <Link href="/" className="bg-green-700 text-white px-4 py-2 rounded-lg">
            Hjem
          </Link>
          <Link href="/tjenester" className="bg-green-700 text-white px-4 py-2 rounded-lg">
            Tjenester
          </Link>
          <Link href="/om-meg" className="bg-green-700 text-white px-4 py-2 rounded-lg">
            Om meg
          </Link>
          <Link href="/kontakt" className="bg-green-700 text-white px-4 py-2 rounded-lg">
            Kontakt
          </Link>
          <Link href="/bestill" className="bg-green-800 text-white px-4 py-2 rounded-lg">
            Bestill
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-700"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-3">
          <Link onClick={() => setOpen(false)} href="/" className="bg-green-700 text-white px-4 py-3 rounded-lg">
            Hjem
          </Link>
          <Link onClick={() => setOpen(false)} href="/tjenester" className="bg-green-700 text-white px-4 py-3 rounded-lg">
            Tjenester
          </Link>
          <Link onClick={() => setOpen(false)} href="/om-meg" className="bg-green-700 text-white px-4 py-3 rounded-lg">
            Om meg
          </Link>
          <Link onClick={() => setOpen(false)} href="/kontakt" className="bg-green-700 text-white px-4 py-3 rounded-lg">
            Kontakt
          </Link>
          <Link onClick={() => setOpen(false)} href="/bestill" className="bg-green-800 text-white px-4 py-3 rounded-lg">
            Bestill
          </Link>
        </div>
      )}
    </nav>
  );
}
