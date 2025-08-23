"use client";
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ArticleCard from '../ArticleCard';
import SharedButton from '../shared/SharedButton';
import styles from './articleCarousel.module.scss';

export default function ArticleCarousel({ articles }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check scroll status
  const checkScrollStatus = () => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Update current index based on scroll position
      const newIndex = Math.round(scrollLeft / clientWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Scroll manual dengan chevron
  const scrollCarousel = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      
      const newScrollLeft = container.scrollLeft + 
                          (direction === 'left' ? -scrollAmount : scrollAmount);
      
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const constrainedScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
      
      container.scrollTo({
        left: constrainedScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScrollStatus, 300);
    }
  };

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = index * container.clientWidth;
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
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
  }, [articles]);

  // Tambahkan event listener untuk scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollStatus);
    return () => {
      container.removeEventListener('scroll', checkScrollStatus);
    };
  }, []);

  // Calculate how many items to show based on screen size
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 3;
    
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      checkScrollStatus(); // Tambahkan ini untuk update scroll status saat resize
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group articles into sets based on itemsPerView
  const groupedArticles = [];
  for (let i = 0; i < articles?.length; i += itemsPerView) {
    groupedArticles.push(articles.slice(i, i + itemsPerView));
  }

  // Jika tidak ada articles, return null atau placeholder
  if (!articles || articles.length === 0) {
    return <div className={styles.emptyState}>Tidak ada artikel untuk ditampilkan</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <SharedButton
        type='secondary' 
        className={`${styles.navButton} ${styles.navButtonLeft} ${!canScrollLeft ? styles.hidden : ''}`}
        onClick={() => scrollCarousel('left')}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </SharedButton>
      
      <div 
        ref={containerRef}
        className={styles.carousel}
      >
        {groupedArticles.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.articleGroup}>
            {group.map((article: any, articleIndex: number) => (
              <ArticleCard 
                key={article.id || articleIndex} 
                article={article} 
              />
            ))}
          </div>
        ))}
      </div>
      
      <SharedButton
        type='secondary'  
        className={`${styles.navButton} ${styles.navButtonRight} ${!canScrollRight ? styles.hidden : ''}`}
        onClick={() => scrollCarousel('right')}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </SharedButton>

      {/* Navigation dots */}
      {groupedArticles.length > 1 && (
        <div className={styles.navigationDots}>
          {groupedArticles.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}