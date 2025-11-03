# 🚀 Mia UMKM

Selamat datang di **Mia UMKM!** 👋  
Platform direktori UMKM (Usaha Mikro, Kecil, dan Menengah) yang membantu pengguna menemukan serta menjelajahi bisnis lokal di sekitar mereka. Aplikasi ini menampilkan daftar UMKM, detail lengkap setiap UMKM, serta lokasi interaktif melalui peta.

## ✨ Fitur Utama
*   **Daftar UMKM**: Menampilkan kartu ringkas setiap UMKM.
*   **Halaman Detail Dinamis**: Menampilkan informasi lengkap setiap UMKM, diakses melalui ID unik (contoh: `/umkm/UMKM001`).
*   **Peta Lokasi Interaktif**: Halaman detail UMKM menyertakan peta interaktif (embed iframe) yang menampilkan lokasi UMKM berdasarkan data koordinat.
*   **Pencarian Responsif**: Navigasi dilengkapi dengan fitur pencarian yang responsif, tersedia untuk penggunaan desktop dan *mobile*.
*   **Carousel / Banner Otomatis**: Komponen carousel/banner dengan navigasi dan pemutaran otomatis telah disediakan untuk *highlight* konten atau promosi tertentu.
*   **Navigasi Adaptif**: Navbar yang responsif dengan menu *mobile* yang otomatis menutup saat berpindah halaman, memastikan alur navigasi yang bersih.

## 🛠️ Teknologi yang Digunakan
Proyek ini dibangun menggunakan teknologi-teknologi modern berikut:

*   **Next.js 14 (App Router)**: Framework React untuk produksi dengan fitur-fitur *powerful* seperti *server-side rendering*, *static site generation*, dan *routing* yang canggih.
*   **React.js**: Library UI JavaScript yang populer untuk membangun antarmuka pengguna yang interaktif.
*   **Tailwind CSS**: Framework CSS *utility-first* yang memungkinkan desain cepat dan kustomisasi tinggi tanpa meninggalkan HTML Anda.
*   **Lucide React**: Koleksi ikon modern dan ringan yang mudah diintegrasikan.
*   **Google Maps Embed**: Digunakan untuk menampilkan peta lokasi UMKM secara langsung di halaman detail.
*   **JSON Data (`umkm.json`)**: Data UMKM disimpan secara lokal dalam format JSON, mudah untuk dikelola dan diimplementasikan.

## 🚀 Cara Menjalankan Proyek
## Prasyarat
Sebelum memulai, pastikan kamu memiliki ini terinstal di sistem kamu:

*   [Node.js](https://nodejs.org/en/download/) (v18.x atau lebih tinggi direkomendasikan)
*   [npm](https://www.npmjs.com/get-npm) (biasanya sudah termasuk dengan Node.js), atau [Yarn](https://classic.yarnpkg.com/en/docs/install), atau [pnpm](https://pnpm.io/installation)

### Clone Repositori Ini

Buka terminal atau Git Bash kamu dan jalankan perintah berikut:

```bash
git clone https://github.com/RapzzKY24/mia_umkm.git
cd mia_umkm
2. Install Dependensi

Setelah masuk ke direktori proyek, install semua dependensi yang dibutuhkan:
npm install
# atau
# yarn install
# atau
# pnpm install
3. Jalankan Mode Development

Sekarang, kamu bisa menjalankan aplikasi dalam mode pengembangan:
npm run dev

Buka di browser kamu: http://localhost:3000

📁 Struktur Proyek
Berikut adalah gambaran singkat struktur direktori utama proyek ini:
mia_umkm/
├── app/                  # Root dari Next.js App Router
│   ├── layout.js         # Layout utama untuk semua halaman (termasuk Navbar)
│   ├── globals.css       # Global CSS untuk Tailwind
│   └── umkm/             # Halaman terkait UMKM
│       ├── page.js       # Halaman daftar UMKM (jika ada di app/umkm/page.js)
│       └── [id]/         # Folder untuk halaman detail UMKM dinamis
│           ├── page.js          # Server Component untuk fetching data UMKM
│           ├── UMKMDetailClient.js # Client Component untuk UI halaman detail
│           └── page.module.css    # CSS Modules untuk halaman detail
├── components/           # Kumpulan komponen UI yang dapat digunakan kembali
│   ├── Carousel.jsx      # Komponen Carousel generik
│   ├── MobileSearch.jsx  # Toggle search bar untuk mobile
│   ├── Navbar.jsx        # Navbar utama aplikasi
│   ├── SearchBar.jsx     # Komponen Search Bar
│   └── UmkmCard.jsx      # Kartu tampilan ringkas untuk setiap UMKM
├── public/               # Aset statis seperti gambar
├── utils/                # Utility functions atau data konfigurasi
│   └── NavLinks.js       # Data untuk navigasi di Navbar
├── umkm.json             # File JSON yang berisi data dummy UMKM (di root proyek)
└── package.json          # Metadata proyek dan daftar dependensi
