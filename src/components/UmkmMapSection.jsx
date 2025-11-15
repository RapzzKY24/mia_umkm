import { umkmData } from "@/data/umkm";

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63453.518806587796!2d106.80207945000002!3d-6.2841065499999935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1763202810255!5m2!1sen!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
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
