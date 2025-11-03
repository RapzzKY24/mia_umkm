import Link from 'next/link';
import Image from 'next/image';
import styles from './UMKMCard.module.css';

export default function UMKMCard({ umkm }) {
  return (
    <Link href={`/umkm/${umkm.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={umkm.imageUrl}
          alt={umkm.name}
          width={300}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className={styles.image}
        />
        <span className={styles.categoryTag}>{umkm.category}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{umkm.name}</h3>
        <div className={styles.ratingLocation}>
          <span className={styles.rating}>⭐ {umkm.rating}</span>
          <span className={styles.location}>📍 {umkm.location}</span>
        </div>
        <p className={styles.description}>{umkm.description.substring(0, 100)}...</p>
      </div>
    </Link>
  );
}