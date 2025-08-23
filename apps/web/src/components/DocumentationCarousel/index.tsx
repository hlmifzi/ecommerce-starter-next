"use client";
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DocumentationCard from '../DocumentationCard';
import SharedButton from '../shared/SharedButton';
import styles from './DocumentationCarousel.module.scss';

export default function DocumentationCarousel({ documentations }:any) {
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
    }
  };

  // Scroll manual dengan chevron
  const scrollCarousel = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
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
  }, [documentations]);

  // Tambahkan event listener untuk scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollStatus);
    return () => {
      container.removeEventListener('scroll', checkScrollStatus);
    };
  }, []);

  // Group documentations into sets of 3
  const groupedDocumentations = [];
  for (let i = 0; i < documentations.length; i += 3) {
    groupedDocumentations.push(documentations.slice(i, i + 3));
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
        {groupedDocumentations.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.documentationGroup}>
            {group.map((doc:any, docIndex:number) => (
              <DocumentationCard 
                key={docIndex} 
                documentation={doc} 
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
    </div>
  );
}