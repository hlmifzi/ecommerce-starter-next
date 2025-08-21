"use client"
import Link from 'next/link';
import { FaShoppingCart, FaChevronRight } from 'react-icons/fa';
import { Product } from '@/types/product';
import styles from './product.module.scss';
import Image from 'next/image';

const ProductDetail = ({
  product
}: {
  product: any
}) => {
  return (
    <div className={styles.container}>
      {/* Product Gallery */}
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <Image 
            src={product.cover_image.url} 
            alt={product.title}
            className={styles.coverImage}
            fill
          />
        </div>
        <div className={styles.thumbnailContainer}>
          {/* Add your thumbnails here */}
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
          <div className={styles.thumbnail}></div>
        </div>
      </div>

      {/* Product Info */}
      <div className={styles.productInfo}>
        <div className={styles.header}>
          <span className={styles.brand}>RSPP Medical</span>
          <h1 className={styles.title}>{product.title}</h1>
          {/* <div className={styles.rating}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.reviewCount}>(24 reviews)</span>
          </div> */}
        </div>
        
        {/* Price Section */}
        <div className={styles.priceContainer}>
          {product.discounted_price && (
            <span className={styles.originalPrice}>Rp {product.price.toLocaleString('id-ID')}</span>
          )}
          <span className={styles.currentPrice}>
            Rp {(product.discounted_price || product.price).toLocaleString('id-ID')}
          </span>
          {product.discounted_price && (
            <span className={styles.discountBadge}>
              {Math.round((1 - product.discounted_price/product.price) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Description */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Deskripsi Produk</h2>
          <div 
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        
        {/* Additional Info */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Spesifikasi</h2>
          <ul className={styles.additionalInfo}>
            {product?.additional_info.map((info: any, index: number) => (
              <li key={index} className={styles.infoItem}>
                <strong>{info.label}:</strong> <span>{info.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.addToCartButton} id="addToCartBtn">
            <FaShoppingCart className={styles.cartIcon} />
            Tambah ke Keranjang
          </button>
          <Link 
            href={`/checkout?product=${product.id}`} 
            className={styles.buyButton}
          >
            Beli Sekarang <FaChevronRight className={styles.arrowIcon} />
          </Link>
        </div>
      </div>

      {/* Floating Cart Animation Element */}
      <div className={styles.floatingCart} id="floatingCart"></div>
    </div>
  )
}

export default ProductDetail