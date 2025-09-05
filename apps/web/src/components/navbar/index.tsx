'use client';
import { useState, useEffect, useRef } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from 'next/link';
import Image from 'next/image';
import ProfileButton from '@/components/ProfileButton';
import { useCartStore } from '@/lib/hooks/useCart';
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

type navbarType = {
  promotion?: string
}

export default function Navbar({
  promotion
}: navbarType) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [showInfo, setShowInfo] = useState(true);
  const lastScrollY = useRef(0);
  const cartItems = useCartStore((state: any) => state.cartItems);
  const [activeLink, setActiveLink] = useState<string>('/');

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

  const handleLinkClick = (url: string) => {
    setActiveLink(url);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.navbarFixed : ''}`}>
      {promotion && showInfo && (
        <div className={styles.topBar}>
          <div className={styles.topBarContainer}>
            <p>{promotion}</p>
            <div className={styles.authLinks}>
              <CloseOutlinedIcon onClick={() => setShowInfo(false)} sx={{ fontSize: 16 }} />
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
              const isActive = activeLink === menu?.url;
              console.log(activeLink,"activeLink")
              console.log(menu?.url,"<<< menu?.url")
              return (
                <Link
                  key={index}
                  href={menu?.url}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  onClick={() => handleLinkClick(menu.url)}
                >
                  {menu?.text}
                </Link>
              );
            })}
          </div>

          <div className={styles.actions}>
            <Link href="/keranjang" className={styles.cartButton} aria-label="Cart">
              <ShoppingCartOutlinedIcon fontSize="medium" />
              <span className={styles.cartCount}>{cartItems?.length}</span>
            </Link>
            <ProfileButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
