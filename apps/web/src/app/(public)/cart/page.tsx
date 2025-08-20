'use client';

import Cart from '@/components/Carts';
import styles from './cart.module.scss';

export default function CheckoutPage() {
  return (
    <div className={styles.container}>
      <Cart withPaymentButton />
    </div>
  );
}