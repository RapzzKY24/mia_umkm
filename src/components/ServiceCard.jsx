export default function ServiceCard({ icon, title, description }) {
  return (
    <div
      className="
        rounded-3xl overflow-hidden shadow-lg border
        bg-white/90 border-slate-200
        dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:border-slate-800
        transition-all duration-300 hover:shadow-xl hover:border-sky-300/70 dark:hover:border-sky-500/40
        transform hover:-translate-y-1
        p-6 sm:p-8 flex flex-col items-center text-center // Padding dan flexbox di sini untuk tata letak konten card
      "
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center rounded-full // Ukuran dan bentuk icon wrapper disamakan
          bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300 // Warna background dan text icon disamakan
          mb-4 // Margin bawah agar ada jarak ke judul
          transition-transform duration-300 hover:scale-110
        "
      >
        {icon}
      </div>

      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
