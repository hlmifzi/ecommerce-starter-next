import { getProducts } from '@/services/api/product';
import TrainingCard from '@/components/TrainingCard';
import styles from './home.module.scss';
import Carousel from '@/components/Banner/banner';

 const carouselItems = [
    {
      image: '/rspp-building.jpg',
      title: 'RSPP Learning & Training Center',
      description: 'Mengedepankan prinsip continuous improvement atau peningkatan berkelanjutan dalam setiap program yang diselenggarakan, guna memastikan bahwa seluruh kegiatan relevan dengan perkembangan teknologi medis terkini serta kebutuhan layanan kesehatan masyarakat.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    },
    {
      image: '/rspp-building.jpg',
      title: 'Layanan Gawat Darurat 24 Jam',
      description: 'Tim medis kami siap melayani Anda 24 jam sehari, 7 hari seminggu.',
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
        <Carousel items={carouselItems} autoPlay={false} interval={5000} />
      </section>
      <section className={styles.popularProduct}>
        <div className={styles.header}>
          <h1 className={styles.title}>Pelatihan Kesehatan Profesional</h1>
          <p className={styles.subtitle}>
            Tingkatkan kompetensi tenaga kesehatan dengan pelatihan berkualitas dari rumah sakit terpercaya
          </p>
        </div>
        
        <div className={styles.productGrid}>
          {products?.map((product:any) => (
            <TrainingCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}