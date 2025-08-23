"use client"
import Link from 'next/link';
import { FaShoppingCart, FaChevronRight } from 'react-icons/fa';
import { Product } from '@/types/product';
import Image from 'next/image';
import Card from '../Card';
import SharedBadge from '../shared/SharedBadge';
import SharedButton from '../shared/SharedButton';

import styles from './product.module.scss';

const ProductDetail = ({
  product
}: {
  product: any
}) => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>{product.title}</h1>
        <p>Penyedia Pembelajaran: </p>
        <p>{product?.hospital_name}</p>
      </header>
      <div className={styles.productInner}>
        <div>
          <div className={styles.imageContainer}>
            <Image 
              src={product?.image?.[0]?.url} 
              alt={product.title}
              fill
            />
          </div>
          <div>
            <SharedBadge />
          </div>
          <div>
            <h2>Tentang Pelatihan</h2>
          </div>
        </div>
        <Card className={styles.boxContainer}>
          <h3>Anda akan mendapatkan</h3>
          <div className={styles.btnAction}>
            <SharedButton type='secondary'>
              + Keranjang
            </SharedButton>
            <Link href={"/masuk"}>
              <SharedButton type='primary'>
                Beli Pelatihan
              </SharedButton>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProductDetail