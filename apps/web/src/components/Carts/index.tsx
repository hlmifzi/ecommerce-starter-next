'use client';

import { useEffect } from "react"
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import Empty from "@/components/Empty";

import { useCartStore } from '@/lib/hooks/useCart';

import styles from './cart.module.scss';

const Cart = ({
  title= "Keranjang Belanja"
}) => {

  const cartItems = useCartStore((state:any) => state.cartItems)
  const removeFromCart = useCartStore((state: any) => state.removeFromCart);
  const isEmpty = cartItems.length > 0
  
  return (
    <>
      <div className={styles.cartContainer}>
        <div>
          <h2 className={styles.cartTitle}>{title}</h2>   
          <div className={styles.cartItems}>
            {isEmpty ? cartItems.map((item:any) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <Image width={50} height={50} src={item?.image?.[0]?.url} alt={item.name || "image"} />
                </div>
                
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.title}</h3>
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
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  <FaTrash />
                </button>
              </div>
            )) : (
              <Empty>
                <p> Belum ada pelatihan,{" "}
                  <Link href="/pelatihan">
                    Beli pelatihan 
                  </Link>{" "}
                  sekarang
                </p>
              </Empty>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;