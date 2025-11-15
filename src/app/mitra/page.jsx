import PartnerCard from "@/components/PartnerCard";
import { partners, partnerCategories } from "@/data/partners";

export default function MitraPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-slate-100 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <header className="mb-6 md:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Mitra UMKM
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold">
            Dukungan Mitra untuk UMKM di Jakarta Selatan
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Platform yang bisa membantu UMKM di Jakarta Selatan untuk jualan,
            menerima pembayaran non-tunai, dan mengelola usahanya secara
            digital.
          </p>
        </header>

        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 border border-sky-200 px-3 py-1 text-xs font-medium dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-700/60">
            {partners.length} mitra tercatat di South venture
          </span>
        </div>

        <div className="space-y-8 md:space-y-10">
          {partnerCategories.map((cat) => {
            const list = partners.filter((p) => p.categoryId === cat.id);
            if (!list.length) return null;

            return (
              <section key={cat.id} className="space-y-3">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">
                    {cat.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {list.map((partner) => (
                    <PartnerCard key={partner.id} partner={partner} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
