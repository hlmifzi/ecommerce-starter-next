"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from "@/components/Button"
import styles from './banner.module.scss';

const Carousel = ({ items, autoPlay = true, interval = 5000 }:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index:any) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className={styles.carouselInner}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item:any, index:any) => (
            <div 
              key={index} 
              className={`${styles.carouselSlide} ${index === currentIndex && !isTransitioning ? styles.active : ''}`}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                className={styles.carouselImage}
                priority={index === 0}
              />
              <div className={styles.carouselOverlay}>
                <div className={styles.carouselContent}>
                  <h2 className={styles.carouselTitle}>{item.title}</h2>
                  <p className={styles.carouselDescription}>{item.description}</p>
                  {item.cta && (
                    <div className={styles.ctaBanner}>
                      <Button type="primary">
                        {item.cta}
                      </Button>
                      <Button type="secondary">
                        {item.second_cta}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
        onClick={goToPrevious}
        aria-label="Slide sebelumnya"
      >
        &#10094;
      </button>
      
      <button 
        className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
        onClick={goToNext}
        aria-label="Slide berikutnya"
      >
        &#10095;
      </button>
      
      <div className={styles.carouselDots}>
        {items.map((_:any, index:any) => (
          <button
            key={index}
            className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Pergi ke slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;