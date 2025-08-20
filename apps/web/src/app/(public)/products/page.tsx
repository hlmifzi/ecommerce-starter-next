import { getProducts } from '@/services/api/product';
import TrainingCard from '@/components/TrainingCard';
import styles from './products.module.scss';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Training Kesehatan Profesional</h1>
        <p className={styles.subtitle}>
          Tingkatkan kompetensi tenaga kesehatan dengan pelatihan berkualitas dari rumah sakit terpercaya
        </p>
      </div>
      
      <div className={styles.productGrid}>
        {products?.map((product:any) => (
          <TrainingCard 
            key={product?.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}