"use client";

import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
      bg-slate-50 text-slate-900 
      dark:bg-gray-950 dark:text-slate-100"
    >
      <ClipLoader color="#0ea5e9" size={60} speedMultiplier={0.9} />

      <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
        Mohon tunggu sebentar, datanya lagi dimuat...
      </p>
    </div>
  );
}
