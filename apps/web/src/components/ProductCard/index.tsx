import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { useRouter } from 'next/navigation';

import SharedButton from '@/components/shared/SharedButton';
import BadgeProduct from '@/components/BadgeProduct';
import AddToCartModal from '@/components/AddToCartModal';

import { useAuthStore } from '@/lib/hooks/useAuth';
import { useCartStore } from '@/lib/hooks/useCart';
import { formatDate } from '@/lib/function/formatDate';

import styles from './productCard.module.scss';

const ProductCard = ({product}:any) => {
    const router = useRouter()
    let price = product?.discounted_price || product?.price

    const isLogin = useAuthStore((state:any) => state.isLogin)
    const cartItems = useCartStore((state:any) => state.cartItems)
    const showAddToCartModal = useCartStore((state:any) => state.showAddToCartModal);
    const addToCartFromPayNow = useCartStore((state:any) => state.addToCartFromPayNow);

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
                  sizes={"(max-width: 768px) 100vw, 120px"}
                  className={styles.productImage}
                />
              </div>
              <div className={styles.content}>
              <div className={styles.headline}>
                  <h2 className={styles.title}>{product?.title}</h2>
                  <p className={styles.hospital}>Oleh: {product?.hospital_name}</p>
              </div>
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
              <div className={styles.btnAction}>
                <SharedButton 
                  type='primary'
                  onClick={(e:any) => {
                    e.preventDefault();
                    addToCartFromPayNow(cartItems[0]);
                    router.push("/pembayaran")
                  }}
                >
                  Daftar Sekarang
                </SharedButton>
                <SharedButton 
                  type='secondary'
                  onClick={(e:any) => {
                    e.preventDefault();
                    isLogin ? showAddToCartModal(product): router.push("/masuk?dari=keranjang")  
                  }}
                >
                  <MdOutlineShoppingCart size={20}  />
                </SharedButton>
              </div>
            </div>
          </div>
        </Link>

    </div>
  )
}

export default ProductCard