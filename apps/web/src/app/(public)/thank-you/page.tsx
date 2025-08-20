'use client';

import { Suspense } from "react"
import { useSearchParams  } from 'next/navigation';
import styles from './thankYou.module.scss';

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  
  const copyOrderId = () => {
    navigator.clipboard.writeText(orderId || '');
    alert('Order ID berhasil disalin!');
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Terima Kasih!</h1>
        <p className={styles.message}>
          Pendaftaran training Anda berhasil. Silakan cek email untuk instruksi pembayaran.
        </p>
        
        <div className={styles.orderInfo}>
          <p className={styles.orderLabel}>Order ID:</p>
          <div className={styles.orderIdContainer}>
            <span className={styles.orderId}>{orderId}</span>
            <button 
              onClick={copyOrderId}
              className={styles.copyButton}
            >
              Salin
            </button>
          </div>
        </div>
        
        <div className={styles.instructions}>
          <h2 className={styles.instructionsTitle}>Instruksi Pembayaran:</h2>
          <ol className={styles.instructionsList}>
            <li>Cek email Anda untuk detail pembayaran</li>
            <li>Selesaikan pembayaran dalam waktu 24 jam</li>
            <li>Konfirmasi pembayaran akan dikirim via WhatsApp</li>
          </ol>
        </div>
      </div>
    </div>
  );
}