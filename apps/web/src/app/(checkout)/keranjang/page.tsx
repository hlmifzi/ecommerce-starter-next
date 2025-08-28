import Cart from '@/components/Carts';
import { getProducts } from '@/services/api/product';
import OrderSummaryBox from '@/components/OrderSummaryBox';
import ProductCarousel from '@/components/ProductCarousel';

import styles from './cart.module.scss';

export default async function CheckoutPage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Cart />
        <OrderSummaryBox withPaymentButton={{ 
          text: "Beli Pelatihan"
         }} />
      </div>
      <div>
         <h2 className={styles.recomendationTitle}>Rekomendasi Pelatihan Lainnya</h2>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
}