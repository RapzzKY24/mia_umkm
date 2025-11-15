"use client";

import Image from "next/image";
import Badge from "./Badge";

export default function PartnerCard({ partner }) {
  return (
    <div
      className="
        flex flex-col rounded-2xl border shadow-sm p-4 sm:p-5
        bg-white/90 border-slate-200
        dark:bg-slate-900/80 dark:border-slate-800 hover:shadow-xl hover:border-sky-300/70 dark:hover:border-sky-500/40 hover:-translate-y-1
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
      flex items-center justify-center 
      rounded-2xl bg-slate-100 dark:bg-slate-800
      h-20 w-20 sm:h-[72px] sm:w-[72px]  
      overflow-hidden hover:scale-110
    "
        >
          {partner.logo ? (
            <Image
              src={partner.logo}
              alt={partner.name}
              width={64}
              height={64}
              className="w-20 h-20 sm:w-14 sm:h-14 object-contain"
            />
          ) : (
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-300">
              {partner.name[0]}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-base font-semibold text-slate-900 dark:text-slate-50">
            {partner.name}
          </span>
          <Badge variant="soft" color="sky" className="mt-1 w-fit">
            {partner.type}
          </Badge>
        </div>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
        {partner.description}
      </p>

      {partner.benefits?.length > 0 && (
        <ul className="mt-3 space-y-1.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
          {partner.benefits.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
