import Link from 'next/link';
import { getProducts } from '@/services/api/product';
import ProductCarousel from '@/components/ProductCarousel';
import Carousel from '@/components/Banner/banner';
import SharedButton from '@/components/shared/SharedButton';

import styles from './home.module.scss';

 const carouselItems = [
    {
      image: '/rspp-building.jpg',
      title: 'RSPP Learning & Training Center',
      description: 'Mengedepankan prinsip continuous improvement atau peningkatan berkelanjutan dalam setiap program yang diselenggarakan.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    },
    {
      image: '/rspp-building.jpg',
      title: 'Scale Up skill Anda Sekarang',
      description: 'Tingkatkan kompetensi tenaga kesehatan dengan pelatihan berkualitas dari rumah sakit terpercaya.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    },
    {
      image: '/rspp-building.jpg',
      title: 'Medical Check Up',
      description: 'Lakukan pemeriksaan kesehatan rutin untuk menjaga kualitas hidup Anda.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    }
  ];

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <section className={styles.bannerHomeContainer}>
        <Carousel items={carouselItems} autoPlay={true} interval={5000} />
      </section>
      <section className={styles.popularProduct}>
        <div className={styles.header}>
          <h1 className={styles.title}>Pelatihan Kesehatan Profesional Terdekat</h1>
        </div>
        
        <div className={styles.productGrid}>
          <ProductCarousel 
            products={products}
          />
          <Link href="/pelatihan">
            <SharedButton className={styles.btnAll} type='primary'>
              Lihat Semua Kelas Profesional
            </SharedButton>
          </Link>
        </div>
      </section>
    </div>
  );
}