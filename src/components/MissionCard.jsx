export function MissionCard({ icon, title, description }) {
  return (
    <div
      className="
        flex flex-col items-center text-center p-6 rounded-2xl border shadow-sm
        bg-white/90 border-slate-200
        dark:bg-slate-900/80 dark:border-slate-800
        transition-all duration-300 hover:shadow-lg hover:border-sky-300/70 dark:hover:border-sky-500/40
        transform hover:-translate-y-1
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300 mb-4 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h4>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
}
