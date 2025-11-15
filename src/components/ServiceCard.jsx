export default function ServiceCard({ icon, title, description }) {
  return (
    <div
      className="
        rounded-3xl overflow-hidden shadow-lg border
        bg-white/90 border-slate-200
        dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:border-slate-800
        transition-colors
      "
    >
      <div className="flex items-center justify-center py-8 sm:py-10">
        <div
          className="
            flex h-16 w-16 items-center justify-center rounded-2xl
            bg-slate-100
            dark:bg-slate-900/60
            text-sky-500
          "
        >
          {icon}
        </div>
      </div>

      <div
        className="
          border-t px-6 py-5 text-center
          border-slate-200
          dark:border-slate-800
        "
      >
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}
