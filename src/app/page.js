'use client';

import { useState, useRef } from 'react';
import umkmData from '../../umkm.json'; 
import UMKMCard from '../components/ui/UMKMCard';
import styles from './page.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('Semua');

  const umkmListRef = useRef(null); 

  const categories = ['Semua', ...new Set(umkmData.map(umkm => umkm.category))];

  const filteredUMKM = umkmData.filter(umkm => {
    const matchesSearch = umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          umkm.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          umkm.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'Semua' || umkm.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  //fungsi untuk menggulir ke section daftar UMKM
  const scrollToUMKMList = () => {
    if (umkmListRef.current) {
      umkmListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Temukan UMKM disekitar!</h1>
          <p className={styles.heroDescription}>
            Jelajahi beragam produk dan layanan lokal yang inovatif dan berkualitas.
            Dukung komunitasmu, nikmati yang terbaik dari UMKM sekitar!
          </p>
          <button 
            className={`${styles.heroButton} button-primary`} 
            onClick={scrollToUMKMList}
          >
            Jelajahi UMKM Sekarang &darr;
          </button>
        </div>
      </section>


      <main className={styles.main}>
        <section ref={umkmListRef} className={styles.umkmListingSection}> {/* Pasang ref di sini */}
          <h2 className={styles.sectionTitle}>-</h2>
          <p className={styles.sectionDescription}>
            Gunakan fitur pencarian dan filter di bawah ini
          </p>

          <div className={styles.controls}>
            <input
              type="text"
              placeholder="Cari UMKM..."
              className={styles.searchBar}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className={styles.filterButtons}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.filterButton} ${filterCategory === category ? styles.active : ''}`}
                  onClick={() => setFilterCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.umkmScrollContainer}>
            {filteredUMKM.length > 0 ? (
              filteredUMKM.map(umkm => (
                <UMKMCard key={umkm.id} umkm={umkm} />
              ))
            ) : (
              <p className={styles.noResults}>Tidak ada UMKM yang ditemukan.</p>
            )}
          </div>
          {filteredUMKM.length > 0 && (
            <p className={styles.scrollHint}>&larr; Geser untuk melihat lebih banyak &rarr;</p>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        ---
      </footer>
    </div>
  );
}