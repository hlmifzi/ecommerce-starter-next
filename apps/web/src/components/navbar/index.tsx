'use client';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineShoppingCart, MdOutlineClose } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import ProfileButton from '../ProfileButton';

import styles from './navbar.module.scss';

export const menus = [
  {
    text: 'Beranda',
    url: '/',
  },
  {
    text: 'Program Pelatihan',
    url: '/#pelatihan',
  },
  {
    text: 'Jadwal',
    url: '/#jadwal-pelatihan',
  },
  {
    text: 'Struktur Organisasi',
    url: '/#struktur-organisasi',
  },
  {
    text: 'Tentang Kami',
    url: '/#tentang-kami',
  },
  {
    text: 'Visi Misi',
    url: '/#visi-misi',
  },
  {
    text: 'Dokumentasi',
    url: '/#dokumentasi',
  },
  {
    text: 'Artikel',
    url: '/#artikel',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [showInfo, setShowInfo] = useState(true);
  const lastScrollY = useRef(0);

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
              <MdOutlineClose onClick={() => setShowInfo(false)} color="#fff" />
            </div>
          </div>
        </div>
      )}
      <div className={styles.mainNav}>
        <div className={styles.mainNavContainer}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo-rspp.svg" alt="RSPP Logo" width={120} height={60} quality={100} className={styles.logoImage} />
          </Link>

          <div className={styles.navLinks}>
            {menus?.map((menu: any, index: number) => {
              return (
                <Link key={index} href={menu?.url} className={styles.navLink}>
                  {menu?.text}
                </Link>
              );
            })}
          </div>

          <div className={styles.actions}>
            <Link href="/keranjang" className={styles.cartButton} aria-label="Cart">
              <MdOutlineShoppingCart size={20} />
              <span className={styles.cartCount}>0</span>
            </Link>
            <ProfileButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
