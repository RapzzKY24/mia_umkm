"use client";

import Image from "next/image";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-slate-100 flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center shadow-md">
          <Image
            src="/vscode.png"
            alt="Logo South Venture"
            width={96}
            height={96}
            className="h-16 w-16 object-contain opacity-90"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            404
          </p>
          <h1 className="mt-1 text-xl sm:text-2xl font-semibold">
            Halaman tidak ditemukan
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Link yang kamu buka kayaknya nggak valid atau sudah dipindahkan.
          </p>
        </div>

        <NextLink
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 transition"
        >
          Kembali ke Beranda
        </NextLink>
      </div>
    </div>
  );
}
