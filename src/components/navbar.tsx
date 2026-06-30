import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b">
      <h1 className="font-bold text-xl text-green-700">Naseri Helseveiledning</h1>

      <div className="flex gap-4">
        <Link href="/" className="bg-green-700 text-white px-4 py-2 rounded-lg">Hjem</Link>
        <Link href="/tjenester" className="bg-green-700 text-white px-4 py-2 rounded-lg">Tjenester</Link>
        <Link href="/om-meg" className="bg-green-700 text-white px-4 py-2 rounded-lg">Om meg</Link>
        <Link href="/kontakt" className="bg-green-700 text-white px-4 py-2 rounded-lg">Kontakt</Link>
        <Link href="/bestill" className="bg-green-800 text-white px-4 py-2 rounded-lg">Bestill</Link>
      </div>
    </nav>
  );
}