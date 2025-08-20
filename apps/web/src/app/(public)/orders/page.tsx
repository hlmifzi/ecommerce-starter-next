'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch, FiClock, FiCheckCircle, FiXCircle, FiTruck, FiCreditCard } from 'react-icons/fi';
import styles from './order.module.scss';
import Cart from '@/components/Carts';

type OrderStatus = 'waiting' | 'paid' | 'processing' | 'completed' | 'failed';

type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type OrderData = {
  orderId: string;
  status: OrderStatus;
  createdAt: string;
  customerName: string;
  totalAmount: number;
  paymentMethod: string;
  items: OrderItem[];
};

const MOCK_ORDERS: Record<string, OrderData> = {
  'TEST-123': {
    orderId: 'TEST-123',
    status: 'paid',
    createdAt: '2023-11-15T10:30:00Z',
    customerName: 'John Doe',
    totalAmount: 250000,
    paymentMethod: 'Gopay',
    items: [
      { id: '1', name: 'Premium Course', price: 250000, quantity: 1 }
    ]
  },
  'TEST-456': {
    orderId: 'TEST-456',
    status: 'waiting',
    createdAt: '2023-11-15T11:45:00Z',
    customerName: 'Jane Smith',
    totalAmount: 500000,
    paymentMethod: 'Bank Transfer',
    items: [
      { id: '2', name: 'Pro Package', price: 500000, quantity: 1 }
    ]
  }
};

export default function OrderStatusPage() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<OrderData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const checkOrder = async () => {
    if (!orderId.trim()) {
      setError('Masukkan Order ID');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      // Simulasi API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (MOCK_ORDERS[orderId]) {
        setOrder(MOCK_ORDERS[orderId]);
      } else {
        setError('Order ID tidak ditemukan');
        setOrder(null);
      }
    } catch (err) {
      setError('Gagal memeriksa status pesanan');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusDetails = (status: OrderStatus) => {
    switch (status) {
      case 'waiting':
        return {
          text: 'Menunggu Pembayaran',
          icon: <FiClock className={styles.waiting} />,
          color: 'var(--warning-color)',
          progress: 1
        };
      case 'paid':
        return {
          text: 'Pembayaran Diterima',
          icon: <FiCheckCircle className={styles.paid} />,
          color: 'var(--success-color)',
          progress: 2
        };
      case 'processing':
        return {
          text: 'Sedang Diproses',
          icon: <FiTruck className={styles.processing} />,
          color: 'var(--info-color)',
          progress: 3
        };
      case 'completed':
        return {
          text: 'Selesai',
          icon: <FiCheckCircle className={styles.completed} />,
          color: 'var(--success-color)',
          progress: 4
        };
      case 'failed':
        return {
          text: 'Gagal',
          icon: <FiXCircle className={styles.failed} />,
          color: 'var(--danger-color)',
          progress: 0
        };
      default:
        return {
          text: 'Tidak Diketahui',
          icon: <FiClock />,
          color: 'var(--gray-color)',
          progress: 0
        };
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Cek Status Pesanan</h1>
        <p>Masukkan Order ID untuk melihat status pesanan Anda</p>
      </div>

      <div className={styles.searchBox}>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Contoh: TEST-123"
          className={styles.searchInput}
        />
        <button 
          onClick={checkOrder}
          disabled={isLoading}
          className={styles.searchButton}
        >
          {isLoading ? 'Memeriksa...' : (
            <>
              <FiSearch /> Cek Status
            </>
          )}
        </button>
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {order && (
        <div>
          <div className={styles.orderHeader}>
            <h2>Order #{order.orderId}</h2>
            <div className={styles.statusBadge} style={{ backgroundColor: getStatusDetails(order.status).color }}>
              {getStatusDetails(order.status).icon}
              <span>{getStatusDetails(order.status).text}</span>
            </div>
          </div>

          <div className={styles.progressTracker}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${(getStatusDetails(order.status).progress / 4) * 100}%` }}
              ></div>
            </div>
            <div className={styles.progressSteps}>
              <div className={getStatusDetails(order.status).progress >= 1 ? styles.active : ''}>
                <FiClock />
                <span>Menunggu</span>
              </div>
              <div className={getStatusDetails(order.status).progress >= 2 ? styles.active : ''}>
                <FiCreditCard />
                <span>Dibayar</span>
              </div>
              <div className={getStatusDetails(order.status).progress >= 3 ? styles.active : ''}>
                <FiTruck />
                <span>Proses</span>
              </div>
              <div className={getStatusDetails(order.status).progress >= 4 ? styles.active : ''}>
                <FiCheckCircle />
                <span>Selesai</span>
              </div>
            </div>
          </div>

          <div className={styles.orderDetails}>
            <div className={styles.detailRow}>
              <span>Tanggal Order:</span>
              <span>{new Date(order.createdAt).toLocaleDateString('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Nama Customer:</span>
              <span>{order.customerName}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Metode Pembayaran:</span>
              <span>{order.paymentMethod}</span>
            </div>
            <div className={styles.detailRow}>
              <span>Total Pembayaran:</span>
              <span className={styles.totalAmount}>
                Rp {order.totalAmount.toLocaleString('id-ID')}
              </span>
            </div>
          </div>

          <Cart title='Item Pesanan'/>

          {order.status === 'waiting' && (
            <div className={styles.actionButtons}>
              <button 
                className={styles.payButton}
                onClick={() => router.push(`/payment-notif`)}
              >
                Lanjutkan Pembayaran
              </button>
              <button className={styles.cancelButton}>
                Batalkan Pesanan
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}