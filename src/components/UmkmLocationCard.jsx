"use client";

import { useState } from "react";

export function UmkmLocationCard({ umkm }) {
  const [showMap, setShowMap] = useState(false);
  const { lat, lng } = umkm.coordinates;

  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=id&z=16&output=embed`;

  return (
    <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-4">
      <h3 className="text-sm font-semibold text-sky-400 mb-3">Lokasi UMKM</h3>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-900">
        {showMap ? (
          <iframe
            src={embedSrc}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs sm:text-sm text-slate-400">
            Google Maps Preview
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
        <span>
          {lat}, {lng}
        </span>

        <button
          type="button"
          onClick={() => setShowMap(true)}
          className="font-medium text-sky-400 hover:text-sky-300 hover:underline"
        >
          Lihat di Maps
        </button>
      </div>
    </div>
  );
}
