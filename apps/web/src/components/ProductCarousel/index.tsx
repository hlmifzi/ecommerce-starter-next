"use client";
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from "@/components/ProductCard"
import SharedButton from '@/components/shared/SharedButton';
import AddToCartModal from '@/components/AddToCartModal';

import styles from './ProductCarousel.module.scss';

export default function ProductCarousel({ products }: any) {
  const productsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Fungsi untuk mengecek status scroll
  const checkScrollStatus = () => {
    if (productsContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = productsContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll manual dengan chevron
  const scrollTabs = (direction: "left" | "right") => {
    if (productsContainerRef.current) {
      const container = productsContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8; // Scroll 80% dari lebar container
      
      const newScrollLeft = container.scrollLeft + 
                          (direction === 'left' ? -scrollAmount : scrollAmount);
      
      // Batasi scroll agar tidak melebihi batas
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const constrainedScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
      
      container.scrollTo({
        left: constrainedScrollLeft,
        behavior: 'smooth'
      });

      // Update status tombol setelah scroll selesai
      setTimeout(checkScrollStatus, 300);
    }
  };

  // Cek status scroll saat komponen dimount dan resize
  useEffect(() => {
    checkScrollStatus();
    
    const handleResize = () => {
      checkScrollStatus();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [products]);

  // Tambahkan event listener untuk scroll
  useEffect(() => {
    const container = productsContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollStatus);
    return () => {
      container.removeEventListener('scroll', checkScrollStatus);
    };
  }, []);

  return (
    <div className={styles.productGrid}>
      <SharedButton
        type='secondary' 
        className={`${styles.productNavButton} ${styles.productNavButtonLeft} ${!canScrollLeft ? styles.hidden : ''}`}
        onClick={() => scrollTabs('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll products left"
      >
        <FaChevronLeft />
      </SharedButton>
      
      <div 
        ref={productsContainerRef}
        className={styles.productGrid}
      >
        {products?.map((product:any, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
          <Link className={styles.linkToAll} href="/pelatihan">
            <SharedButton  type='primary'>
              Lihat Semua
            </SharedButton>
          </Link>
      </div>
      
      <SharedButton
        type='secondary'  
        className={`${styles.productNavButton} ${styles.productNavButtonRight} ${!canScrollRight ? styles.hidden : ''}`}
        onClick={() => scrollTabs('right')}
        disabled={!canScrollRight}
        aria-label="Scroll products right"
      >
        <FaChevronRight />
      </SharedButton>

    </div>
  );
}