"use client"
import Link from 'next/link';
import { useAuthStore } from '@/lib/hooks/useAuth';
import Image from 'next/image';
import Card from '../Card';
import SharedBadge from '../shared/SharedBadge';
import SharedButton from '../shared/SharedButton';

import styles from './product.module.scss';


const ArticleDetail = ({
  product
}: {
  product: any
}) => {
  const isLogin = useAuthStore((state:any) => state.isLogin)
  
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>{product.title}</h1>
        <p>{product?.date}</p>
      </header>
      <div className={styles.productInner}>
        <div>
          <div className={styles.imageContainer}>
            <Image 
              src={product?.image} 
              alt={product.title}
              fill
            />
          </div>
          <div>
            <p>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail