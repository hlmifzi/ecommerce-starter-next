"use client";
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { MdOutlineShoppingCart, MdOutlineClose } from 'react-icons/md';
import SharedButton from '@/components/shared/SharedButton';
import Link from 'next/link';
import Image from 'next/image';

import styles from './navbar.module.scss';
import ProfileButton from '../ProfileButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [showInfo, setShowInfo] = useState(true);
  const lastScrollY = useRef(0);

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Tentukan arah scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up');
      }
      
      lastScrollY.current = currentScrollY;
      setIsScrolled(currentScrollY > 90);
    };

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
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarFixed : ''}`}>
      {showInfo && (
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <p>Diskon 50% Untuk 100 pembeli pertama training vaksin minigitis</p>
            <div className={styles.authLinks}>
              <MdOutlineClose onClick={()=> setShowInfo(false)} color='#fff' />
            </div>
          </div>
        </div>
      )}
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
            <Link href={pathname === "/" ? "#pelatihan" : "/pelatihan" } className={styles.navLink}>Program Pelatihan</Link>
            <Link href={pathname === "/" ? "#jadwal-pelatihan" : "/jadwal-pelatihan"} className={styles.navLink}>Jadwal</Link>
            <Link href={pathname === "/" ? "#struktur-organisasi" :"/struktur-organisasi"} className={styles.navLink}>Struktur Organisasi</Link>
            <Link href={pathname === "/" ? "#tentang-kami" :"/tentang-kami"} className={styles.navLink}>Tentang Kami</Link>
            <Link href={pathname === "/" ? "#visi-misi" :"/visi-misi"} className={styles.navLink}>Visi Misi</Link>
            <Link href={pathname === "/" ? "#dokumentasi" :"/dokumentasi" }className={styles.navLink}>Dokumentasi</Link>
            <Link href={pathname === "/" ? "#artikel" :"/artikel" }className={styles.navLink}>Artikel</Link>
          </div>
          
          <div className={styles.actions}>
            <Link href="/keranjang" className={styles.cartButton} aria-label="Cart">
              <MdOutlineShoppingCart size={20}  />
              <span className={styles.cartCount}>0</span>
            </Link>
           <ProfileButton />
          </div>
        </div>
      </div>
    </nav>
  );
}