import { umkmData } from "@/data/umkm";
import Image from "next/image";

export function UmkmMapSection() {
  return (
    <section className="mt-6 mb-6">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="hidden sm:inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-300 border border-sky-500/30">
          {umkmData.length} UMKM terdaftar
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-md">
        <div className="relative aspect-[16/5] w-full">
          <Image
            src="/images/indo-map-cluster.png"
            alt="Peta sebaran UMKM"
            className="h-full w-full object-cover"
            height={600}
            width={600}
          />
          <div className="absolute bottom-3 left-3 rounded-xl bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 border border-white/10 backdrop-blur">
            <div className="font-semibold">Fokus: Jakarta Selatan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
