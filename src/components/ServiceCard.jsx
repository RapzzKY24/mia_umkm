// components/ServiceCard.jsx
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-lg overflow-hidden">
      <div className="flex items-center justify-center py-10">
        <div className="flex h-16 w-16 items-center justify-center  bg-slate-900/60">
          {icon}
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-5 text-center">
        <h3 className="text-base font-semibold text-slate-50">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}
