"use client";
import Link from 'next/link';
import { Product } from '@/types/product';
import styles from './TrainingCard.module.scss';
import Image from 'next/image';

export default function TrainingCard({ product }: any) {
  return (
    <Link href={`/product/${product?.slug}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image 
            src={`${product?.image?.[0]?.url}`} 
            alt={product?.title}
            className={styles.image}
            fill
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.hospital}>{product?.hospital_name}-address: {product?.hospital_address}</h3>
          <h2 className={styles.title}>{product?.title}</h2>
          <div className={styles.priceContainer}>
            {product?.discounted_price && (
              <span className={styles.originalPrice}>Rp {product?.price.toLocaleString()}</span>
            )}
            <span className={styles.currentPrice}>
              Rp {(product?.discounted_price || product?.price).toLocaleString()}
            </span>
          </div>
          <Link href={`/checkout/`} className={styles.button}>
            Beli Sekarang
          </Link>
        </div>
      </div>
    </Link>
  );
}