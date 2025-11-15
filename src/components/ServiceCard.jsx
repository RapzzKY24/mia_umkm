import Image from "next/image";
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative max-w-sm rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl overflow-hidden mt-6">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />

      <div className="relative flex h-48 items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/70 border border-sky-500/40 shadow-lg">
          <span className="text-sky-400 group-hover:scale-110 transition-transform duration-200">
            {icon}
          </span>
        </div>
      </div>

      <div className="relative bg-white/5 backdrop-blur-md border-t border-white/10 px-6 py-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
