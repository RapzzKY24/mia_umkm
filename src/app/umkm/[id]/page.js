import umkmData from '../../../../umkm.json';
import UMKMDetailClient from './UMKMDetailClient';
import styles from './page.module.css';


export async function generateStaticParams() {
  return umkmData.map((umkm) => ({
    id: umkm.id,
  }));
}


export default function UMKMDetailPage({ params }) {
  const umkm = umkmData.find(u => u.id === params.id);

  if (!umkm) {

    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <p className={styles.loading}>UMKM tidak ditemukan.</p>
        </main>
      </div>
    );
  }

  return <UMKMDetailClient umkm={umkm} />;
}