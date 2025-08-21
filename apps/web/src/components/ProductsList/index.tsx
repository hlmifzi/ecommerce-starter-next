"use client";
import ProductCard from "../ProductCard"

import styles from './productsList.module.scss';

export default function ProductsList({ products }: any) {
  return (
    <div className={styles.productGrid}>
      {products?.map((product:any, index: number) => (
          <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}