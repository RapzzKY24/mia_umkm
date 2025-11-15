import { umkmData } from "@/data/umkm";
import Image from "next/image";

export function UmkmMapSection() {
  return (
    <section className="mt-8 mb-10">
      <div className="flex items-center justify-between gap-2 mb-4">
        <span
          className="
            hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs border
            bg-sky-100/80 text-sky-700 border-sky-300
            dark:bg-sky-500/10 dark:text-sky-300 dark:border-sky-500/30
          "
        >
          {umkmData.length} UMKM terdaftar
        </span>
      </div>

      <div
        className="
          overflow-hidden rounded-2xl border shadow-lg
          bg-white border-slate-200
          dark:bg-slate-900/80 dark:border-slate-800 
        "
      >
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/images/indo-map-cluster.png"
            alt="Peta sebaran UMKM"
            className="h-full w-full object-cover"
            height={700}
            width={1400}
          />

          <div
            className="
              absolute bottom-3 left-3 px-3 py-2 rounded-xl border text-xs sm:text-sm
              bg-white/80 text-slate-800 border-slate-300
              dark:bg-slate-950/80 dark:text-slate-100 dark:border-white/10
              backdrop-blur
            "
          >
            <span className="font-semibold">Fokus: Jakarta Selatan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
