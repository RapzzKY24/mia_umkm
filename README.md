This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

git clone https://github.com/RapzzKY24/mia_umkm.git

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# mia_umkm

Aplikasi berbasis Next.js untuk menampilkan dan menjelajahi data Usaha Mikro, Kecil, dan Menengah (UMKM) lokal. Proyek ini dibangun dengan fokus pada performa dan pengalaman pengguna yang responsif.

## Fitur Utama

- **Daftar UMKM:** Menampilkan ringkasan UMKM dalam bentuk kartu (Card) di halaman utama.
- **Halaman Detail Dinamis:** Menampilkan informasi lengkap setiap UMKM/page.js].
- **Integrasi Peta:** Halaman detail UMKM menyertakan peta interaktif (embed iframe) yang menampilkan lokasi UMKM berdasarkan data koordinat/UMKMDetailClient.js].
- **Fungsionalitas Pencarian:** Navigasi dilengkapi dengan fitur pencarian yang responsif dan juga tersedia dalam mode mobile.
- **Carousel Otomatis:** Halaman beranda menampilkan carousel/banner dengan navigasi dan pemutaran otomatis untuk promosi atau informasi.
- **Data Lokal:** Data UMKM saat ini disimpan secara lokal dalam file JSON (`src/data/umkm.json`).

## Teknologi

- **Framework:** [Next.js](https://nextjs.org/) (v15.5.6) menggunakan App Router.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) untuk utility-first CSS.
- **Fonts:** Menggunakan font [Geist](https://vercel.com/font) (`--font-geist-sans` dan `--font-geist-mono`) melalui `next/font/google`.
- **Ikon:** [Lucide React](https://lucide.dev/icons/search).

## Memulai Proyek

Proyek ini menggunakan `npm` sebagai manajer paket.
