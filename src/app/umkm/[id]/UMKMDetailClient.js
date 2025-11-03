
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
      <main className={styles.main}>
        <button onClick={() => router.back()} className={`${styles.backButton} button-secondary`}>
          &larr; Kembali
        </button>

        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <Image
              src={umkm.imageUrl}
              alt={umkm.name}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, 700px"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              className={styles.mainImage}
            />
            <span className={styles.categoryTag}>{umkm.category}</span>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.name}>{umkm.name}</h1>
            <div className={styles.ratingLocation}>
              <span className={styles.rating}>⭐ {umkm.rating}</span>
              <span className={styles.location}>📍 {umkm.location}</span>
            </div>
            <p className={styles.description}>{umkm.description}</p>
          </div>
        </div>

        <section className={styles.mapSection}>
          <h2>Lokasi UMKM</h2>
          <div className={styles.mapEmbed}>
            <iframe
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0, borderRadius: '8px' }}
              src={mapSrc}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title={`Lokasi ${umkm.name}`}
            ></iframe>
          </div>
          <p className={styles.mapNote}>*</p>
        </section>

      </main>

      <footer className={styles.footer}>
        ---
      </footer>
    </div>
  );
}