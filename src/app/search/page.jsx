import UmkmCard from "@/components/UmkmCard";
import { umkmData } from "@/data/umkm";

export default function SearchPage({ searchParams }) {
  const q = (searchParams.q || "").toLowerCase().trim();

  const results = q
    ? umkmData.filter((item) => {
        const combined =
          `${item.name} ${item.category} ${item.location}`.toLowerCase();
        return combined.includes(q);
      })
    : [];

  return (
    <main className="min-h-screen bg-slate-950 pt-20 md:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-[95%] max-w-7xl">
        <h1 className="text-xl md:text-2xl font-semibold text-slate-50">
          Hasil pencarian
        </h1>
        <p className="mt-1 text-xs text-slate-400">
          Kata kunci:{" "}
          <span className="font-medium text-slate-100">{q || "-"}</span>
        </p>

        {!q && (
          <p className="mt-6 text-sm text-slate-400">
            Ketik nama, kategori, atau lokasi UMKM di kotak pencarian untuk
            mulai mencari.
          </p>
        )}

        {q && results.length === 0 && (
          <p className="mt-6 text-sm text-slate-400">
            Nggak ada UMKM yang cocok dengan kata kunci ini.
          </p>
        )}

        {results.length > 0 && (
          <section className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {results.map((item) => (
              <UmkmCard key={item.id} item={item} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
