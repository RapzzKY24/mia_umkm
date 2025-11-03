'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function UMKMDetailClient({ umkm }) {
  const router = useRouter();

  if (!umkm) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.loading}>UMKM tidak ditemukan. Kembali ke <Link href="/">Halaman Utama</Link></p>
        </main>
      </div>
    );
  }

  const mapSrc = `https://maps.google.com/maps?q=${umkm.coordinates.lat},${umkm.coordinates.lng}&hl=es&z=14&output=embed`;

  return (
    <div className={styles.container}>
      {/* Konten utama yang bertindak sebagai "card" detail UMKM */}
      <main className={styles.main}>
        <button onClick={() => router.back()} className={`${styles.backButton} ${styles.buttonSecondary}`}>
          &larr; Kembali
        </button>

        {/* --- Bagian Gambar --- */}
        <div className={styles.imageWrapper}>
          <Image
            src={umkm.imageUrl}
            alt={umkm.name}
            width={800}
            height={450}
            sizes="(max-width: 768px) 100vw, 900px"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority // Memuat gambar ini lebih awal
          />
          <span className={styles.categoryTag}>{umkm.category}</span>
        </div>

        {/* --- Tata Letak Konten Dua Kolom --- */}
        <div className={styles.contentLayout}>

          {/* Kolom Kiri: Detail UMKM */}
          <section className={styles.detailsSection}>
            <h1 className={styles.name}>{umkm.name}</h1>
            <div className={styles.ratingLocation}>
              <span>⭐ {umkm.rating}</span>
              <span>📍 {umkm.location}</span>
            </div>
            <p className={styles.description}>{umkm.description}</p>
          </section>

          {/* Kolom Kanan: Peta Lokasi */}
          <aside className={styles.mapSection}>
            <h2>Lokasi UMKM</h2>
            <div className={styles.mapEmbed}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0, borderRadius: '8px' }}
                src={mapSrc}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title={`Lokasi ${umkm.name}`}
              ></iframe>
            </div>
            <p className={styles.mapNote}>.</p>
          </aside>

        </div>

        {/* --- Footer (Dipindahkan ke dalam main content) --- */}
        <footer className={styles.footer}>
          Informasi Detail UMKM
        </footer>
      </main>
    </div>
  );
}