'use client';

import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import styles from './cart.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Cart = ({
  withPaymentButton = false,
  title= "Keranjang Belanja"
}) => {
  // Sample cart data (replace with your actual data)
  const cartItems = [
    {
      id: 1,
      name: "Training Kesehatan Dasar",
      price: 1200000,
      discountedPrice: 0,
      image: "/nurse-training.png",
      quantity: 1,
      hospital: "authorized: RS pusat pertamina (RSPP)"
    },
    {
      id: 2,
      name: "Advanced Medical Training",
      price: 2500000,
      image: "/vaksin.png",
      quantity: 2,
      hospital: "authorized: RS pusat pertamina (RSPP)"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (item?.discountedPrice || item.price) * item.quantity;
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>{title}</h2>
      
      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <div className={styles.itemImage}>
              <Image width={50} height={50} src={item.image} alt={item.name} />
            </div>
            
            <div className={styles.itemDetails}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemHospital}>{item.hospital}</p>
              
              <div className={styles.priceContainer}>
                {item?.discountedPrice ? (
                  <>
                    <span className={styles.originalPrice}>Rp {item.price.toLocaleString('id-ID')}</span>
                    <span className={styles.discountedPrice}>Rp {item?.discountedPrice.toLocaleString('id-ID')}</span>
                  </>
                ) : (
                  <span className={styles.currentPrice}>Rp {item.price.toLocaleString('id-ID')}</span>
                )}
              </div>
              
              <div className={styles.quantityControl}>
                <button className={styles.quantityButton}>
                  <FaMinus />
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button className={styles.quantityButton}>
                  <FaPlus />
                </button>
              </div>
            </div>
            
            <button className={styles.removeButton}>
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
      
      <div className={styles.cartSummary}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>Rp {subtotal.toLocaleString('id-ID')}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Biaya Admin</span>
          <span>Rp 5.000</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Total</span>
          <span className={styles.totalPrice}>Rp {(subtotal + 5000).toLocaleString('id-ID')}</span>
        </div>
        {withPaymentButton && (
          <Link href="/checkout">
            <button className={styles.checkoutButton}>
              Checkout Sekarang
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;