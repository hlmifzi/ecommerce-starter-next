"use client";
import { useState, useEffect, useRef } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import ButtonComponent from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';



import styles from './navbar.module.scss';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Tentukan arah scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 36) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
      
      // Ubah menjadi fixed setelah scroll 36px
      setIsScrolled(currentScrollY > 36);
    };

    // Gunakan requestAnimationFrame untuk performa lebih smooth
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarFixed : ''}`}>
      {/* <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.contactInfo}>
            <span>☎️ 150442</span>
            <span>✉️ info@rspp-ecommerce.com</span>
          </div>
          <div className={styles.authLinks}>
            <Link href="/login">Login / Register</Link>
          </div>
        </div>
      </div> */}
      
      <div className={styles.mainNav}>
        <div className={styles.mainNavContainer}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo-rspp.svg" 
              alt="RSPP Logo" 
              width={120} 
              height={60}
              quality={100}
              className={styles.logoImage}
            />
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Beranda</Link>
            <Link href="/products" className={styles.navLink}>Program Pelatihan</Link>
            <Link href="/categories" className={styles.navLink}>Struktur Organisasi</Link>
            <Link href="/about" className={styles.navLink}>Tentang Kami</Link>
            <Link href="/contact" className={styles.navLink}>Artikel</Link>
          </div>
          
          <div className={styles.actions}>
            <Link href="/cart" className={styles.cartButton} aria-label="Cart">
              <MdOutlineShoppingCart size={20}  />
              <span className={styles.cartCount}>0</span>
            </Link>
            <ButtonComponent type="secondary">
              Masuk
            </ButtonComponent>
          </div>
        </div>
      </div>
    </nav>
  );
}