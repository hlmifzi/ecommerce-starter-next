'use client';

import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';

import styles from './cart.module.scss';

const Cart = ({
  cartItems =  [
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
  ],
  title= "Keranjang Belanja"
}) => {


  return (
    <>
      <div className={styles.cartContainer}>
        <div>
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
                </div>
                
                <button className={styles.removeButton}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;