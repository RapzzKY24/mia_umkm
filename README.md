# 🚀 Mia UMKM: Platform Direktori UMKM Lokal

Selamat datang di Mia UMKM! 👋 Ini adalah sebuah platform direktori UMKM (Usaha Mikro, Kecil, dan Menengah) yang dirancang untuk membantu pengguna menemukan dan menjelajahi bisnis lokal di sekitar mereka. Aplikasi ini menyediakan tampilan detail setiap UMKM, termasuk informasi produk/layanan, lokasi, rating, dan deskripsi.

Tujuan utama proyek ini adalah menyediakan antarmuka yang bersih dan intuitif untuk mencari dan mendapatkan informasi tentang UMKM, sekaligus mendemonstrasikan kemampuan Next.js 14 dengan App Router.

## ✨ Fitur Utama

Berikut adalah beberapa fitur keren yang ada di aplikasi ini:

*   **Daftar UMKM**: Menampilkan ringkasan UMKM dalam bentuk kartu (Card) di halaman utama atau halaman daftar khusus.
*   **Halaman Detail Dinamis**: Menampilkan informasi lengkap setiap UMKM di halaman detail yang dibuat secara dinamis (misal: `/umkm/UMKM001`).
*   **Integrasi Peta Lokasi**: Halaman detail UMKM menyertakan peta interaktif (embed iframe) yang menampilkan lokasi UMKM berdasarkan data koordinat yang tersedia.
*   **Fungsionalitas Pencarian**: Navigasi dilengkapi dengan fitur pencarian yang responsif dan tersedia baik di desktop maupun mode *mobile* (pop-up).
*   **Carousel Otomatis**: Komponen carousel/banner dengan navigasi dan pemutaran otomatis telah disediakan, siap untuk diintegrasikan di halaman beranda atau bagian promosi.
*   **Navigasi Adaptif**: Navbar yang responsif dengan menu *mobile* yang akan otomatis tertutup saat navigasi ke halaman detail atau halaman lain.
*   **Alur Navigasi Detail**: Dari halaman detail UMKM, disarankan untuk kembali menggunakan tombol "Kembali" yang disediakan untuk memastikan alur pengguna yang konsisten.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi-teknologi modern berikut:

*   **Next.js 14 (App Router)**: Framework React untuk produksi dengan fitur-fitur *powerful* seperti *server-side rendering*, *static site generation*, dan *routing* yang canggih.
*   **React.js**: Library UI JavaScript yang populer untuk membangun antarmuka pengguna yang interaktif.
*   **Tailwind CSS**: Framework CSS *utility-first* yang memungkinkan desain cepat dan kustomisasi tinggi tanpa meninggalkan HTML Anda.
*   **Lucide React**: Koleksi ikon modern dan ringan yang mudah diintegrasikan.
*   **Google Maps Embed**: Untuk menampilkan peta lokasi UMKM secara langsung di halaman detail.
*   **JSON Data**: Data UMKM saat ini disimpan secara lokal dalam file JSON (`umkm.json`) di *root* proyek.

## 🚀 Cara Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi Mia UMKM di lingkungan pengembangan lokal kamu.

### Prasyarat

Sebelum memulai, pastikan kamu memiliki ini terinstal di sistem kamu:

*   [Node.js](https://nodejs.org/en/download/) (v18.x atau lebih tinggi direkomendasikan)
*   [npm](https://www.npmjs.com/get-npm) (biasanya sudah termasuk dengan Node.js), atau [Yarn](https://classic.yarnpkg.com/en/docs/install), atau [pnpm](https://pnpm.io/installation)

## 📁 Struktur Proyek
Berikut adalah gambaran singkat struktur direktori utama proyek ini:
code
Code
mia_umkm/
├── app/                  # Root dari Next.js App Router
│   ├── layout.js         # Layout utama untuk semua halaman (termasuk Navbar)
│   ├── globals.css       # Global CSS untuk Tailwind
│   └── umkm/             # Halaman terkait UMKM
│       ├── page.js       # Halaman daftar UMKM (jika ada, contoh: app/umkm/page.js)
│       └── [id]/         # Folder untuk halaman detail UMKM dinamis
│           ├── page.js          # Server Component untuk fetching data UMKM
│           ├── UMKMDetailClient.js # Client Component untuk UI halaman detail
│           └── page.module.css    # CSS Modules untuk halaman detail
├── components/           # Kumpulan komponen UI yang dapat digunakan kembali
│   ├── CardUmkm.jsx      # (Komponen ini ada tapi tidak digunakan - UmkmCard lebih baru)
│   ├── Carousel.jsx      # Komponen Carousel generik
│   ├── MobileSearch.jsx  # Toggle search bar untuk mobile
│   ├── Navbar.jsx        # Navbar utama aplikasi
│   ├── NavbarResponsive.jsx # (File kosong, bisa dihapus jika tidak digunakan)
│   ├── SearchBar.jsx     # Komponen Search Bar
│   └── UmkmCard.jsx      # Kartu tampilan ringkas untuk setiap UMKM
├── public/               # Aset statis seperti gambar
├── utils/                # Utility functions atau data konfigurasi
│   └── NavLinks.js       # Data untuk navigasi di Navbar
├── umkm.json             # File JSON yang berisi data dummy UMKM (di root proyek)
└── package.json          # Metadata proyek dan daftar dependensi
