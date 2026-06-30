import Link from "next/link";

export default function Takk() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Takk!
        </h1>

        <p className="text-gray-600 mb-8">
          Din forespørsel er sendt.
          Farzana vil kontakte deg så snart som mulig.
        </p>

        <Link
          href="/"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          Tilbake til forsiden
        </Link>
      </div>
    </main>
  );
}