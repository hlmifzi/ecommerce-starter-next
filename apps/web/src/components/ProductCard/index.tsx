import Link from 'next/link';
import Image from 'next/image';
import SharedButton from '../shared/SharedButton';

import styles from './productCard.module.scss';
import BadgeProduct from '../BadgeProduct';
import { formatDate } from '@/lib/function/formatDate';

const ProductCard = ({product}:any) => {

    let price = product?.discounted_price || product?.price

    return (
    <div className={styles.productCardContainer}>
        <div className={styles.badgeProduct}>
            <BadgeProduct type={product?.type} />
        </div>
        <Link 
            href={`/pelatihan/${product?.slug}`} 
            key={product.id} 
            className={styles.productLink}
        >
            <div className={styles.card}>
                <div className={styles.badgeStatusProduct}>
                    <BadgeProduct type={product?.status} />
                </div>
                <div className={styles.imageContainer}>
                <Image 
                    src={`${product?.image?.[0]?.url}`} 
                    alt={product?.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className={styles.productImage}
                />
                </div>
                <div className={styles.content}>
                <h2 className={styles.title}>{product?.title}</h2>
                <p className={styles.hospital}>Oleh: {product?.hospital_name}</p>
                <div className={styles.countdownFreePaidContainer}>
                    <BadgeProduct type={product?.registrationClosedStatus} text={"12 hari lagi"} />
                    <BadgeProduct type={price ? "paid" : "free" } />
                </div>
                <div className={styles.priceContainer}>
                    {product?.discounted_price && (
                        <span className={styles.originalPrice}>Rp {product?.price.toLocaleString()}</span>
                    )}
                    <span className={styles.currentPrice}>
                    Rp {price.toLocaleString()}
                    </span>
                </div>
                <div className={styles.dateRegisterdContainer}>
                    <p>{formatDate(product?.scheduled_date)}</p>
                    <p>{product?.registered_qty} Terdaftar</p>
                </div>
                <Link href={`/masuk/`}>
                    <SharedButton type='primary'>
                        Daftar Sekarang
                    </SharedButton>
                </Link>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard