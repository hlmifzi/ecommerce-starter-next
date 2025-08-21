'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaCheck, FaShoppingBag } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import styles from './paymentNotif.module.scss';
import Link from 'next/link';
import Cart from '@/components/Carts';

export default function PaymentNotification() {
  const containerRef = useRef<HTMLDivElement>(null);
  const checkmarkRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  // Initial setup - hide elements
  gsap.set(containerRef.current, { y: 100, opacity: 0 });
  gsap.set(checkmarkRef.current, { scale: 0 });
  gsap.set('.animated-item', { y: 20, opacity: 0 });

  // Animation sequence
  const tl = gsap.timeline();

  // Slide up the main container
  tl.to(containerRef.current, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "back.out(1.2)"
  });

  // Checkmark animation
  tl.to(checkmarkRef.current, {
    scale: 1,
    duration: 0.6,
    ease: "elastic.out(1, 0.5)"
  }, "-=0.4");

  // Animate in the order details
  tl.to('.animated-item', {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out"
  });

  // Continuous subtle pulse for the checkmark
  tl.to(checkmarkRef.current, {
    scale: 1.05,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  }, "-=0.5");

  // Proper cleanup function
  return () => {
    tl.kill(); // Kill the timeline
    gsap.killTweensOf([containerRef.current, checkmarkRef.current, '.animated-item']); // Kill all related tweens
  };
}, []);

  return (
    <div className={styles.notificationContainer}>
      <div className={styles.notificationCard} ref={containerRef}>
        {/* Animated Checkmark */}
        <div className={styles.checkmarkContainer} ref={checkmarkRef}>
          <div className={styles.checkmarkBackground}>
            <FaCheck className={styles.checkmarkIcon} />
          </div>
          <div className={styles.checkmarkPulse}></div>
        </div>

        {/* Notification Content */}
        <h1 className={`${styles.title} animated-item`}>Pembayaran Berhasil!</h1>
    
        <p className={`${styles.message} animated-item`}>
          Terima kasih telah melakukan pembelian. Pesanan Anda sedang diproses.
        </p>

                {/* Order Details */}
        <div className={`${styles.orderDetails} animated-item`} ref={orderRef}>
          <div className={styles.detailItem}>
            <FaShoppingBag className={styles.detailIcon} />
            <div>
              <span className={styles.detailLabel}>ID Pesanan</span>
              <span className={styles.detailValue}>TR-{Math.floor(Math.random() * 1000000)}</span>
            </div>
          </div>
          
          <div className={styles.detailItem}>
            <MdPayment className={styles.detailIcon} />
            <div>
              <span className={styles.detailLabel}>Metode Pembayaran</span>
              <span className={styles.detailValue}>Bank Transfer (BCA)</span>
            </div>
          </div>
        </div>


        <Cart title='Detail Pesanan'/>


        {/* Action Buttons */}
        <div className={`${styles.actionButtons} animated-item`}>
          <Link className={styles.secondaryButton} href="/trainings">
                Belanja Lagi
          </Link>
        </div>
      </div>
    </div>
  );
}