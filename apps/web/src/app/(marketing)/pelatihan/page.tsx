import { getProducts } from '@/services/api/product';
import ProductsList from '../../../components/ProductsList';

import styles from './training.module.scss';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Pelatihan Kesehatan Profesional</h1>
        <p className={styles.subtitle}>
          Tingkatkan kompetensi tenaga kesehatan dengan pelatihan berkualitas dari rumah sakit terpercaya
        </p>
      </div>
      
        <ProductsList products={products}/>
    </div>
  );
}