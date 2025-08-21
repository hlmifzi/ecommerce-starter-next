'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaLock, FaArrowRight } from 'react-icons/fa';
import Cart from '@/components/Carts';
import styles from './checkout.module.scss';
// import midtransClient from 'midtrans-client';

type FormData = {
  name: string;
  phone: string;
  email: string;
  paymentMethod: string;
};

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // tambahkan properti lain yang diperlukan
};

export default function CheckoutPage() {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<FormData>({
    defaultValues: {
      paymentMethod: 'midtrans'
    }
  });
  
  const selectedPayment = watch('paymentMethod');
  
  // Fungsi untuk mendapatkan data keranjang (contoh)
  const getCartData = (): CartItem[] => {
    // Implementasi untuk mendapatkan data keranjang
    // Ini bisa dari localStorage, context, atau API
    return [
      { id: '1', name: 'Training Premium', price: 500000, quantity: 1 }
    ];
  };
  
  // Fungsi untuk menghitung total
  const calculateTotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const onSubmit = async (data: FormData) => {
    if (data.paymentMethod === 'midtrans') {
      await handleMidtransPayment(data);
    } else {
      // Handle transfer bank manual
      router.push("/payment-notif");
    }
  };
  
  const handleMidtransPayment = async (customerData: FormData) => {
    const cartItems = getCartData();
    const totalAmount = calculateTotal(cartItems);
    
    // // Buat Snap instance
    // const snap = new midtransClient.Snap({
    //   isProduction: false, // Ganti ke true untuk production
    //   serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY || 'SB-Mid-server-your-key',
    //   clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || 'SB-Mid-client-your-key'
    // });
    
    const parameter = {
      transaction_details: {
        order_id: 'ORDER-' + Math.floor(Math.random() * 1000000),
        gross_amount: totalAmount
      },
      credit_card: {
        secure: true
      },
      customer_details: {
        first_name: customerData.name,
        last_name: '',
        email: customerData.email,
        phone: customerData.phone
      },
      item_details: cartItems.map(item => ({
        id: item.id,
        price: item.price,
        quantity: item.quantity,
        name: item.name
      }))
    };
    
    try {
      // const transaction = await snap.createTransaction(parameter);
      
      // Redirect ke halaman pembayaran Midtrans
      // window.location.href = transaction.redirect_url;
    } catch (error) {
      console.error('Midtrans error:', error);
      // Handle error (tampilkan notifikasi ke user)
    }
  };
  
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <h1 className={styles.title}>Pendaftaran Training</h1>
          <p className={styles.subtitle}>Lengkapi data diri Anda untuk melanjutkan pembayaran</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nama Lengkap</label>
            <input
              {...register('name', { required: 'Nama lengkap wajib diisi' })}
              className={styles.input}
              placeholder="Masukkan nama lengkap Anda"
            />
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Nomor WhatsApp</label>
            <input
              {...register('phone', { 
                required: 'Nomor WhatsApp wajib diisi',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Harus berupa angka'
                },
                minLength: {
                  value: 10,
                  message: 'Nomor terlalu pendek'
                }
              })}
              className={styles.input}
              placeholder="Contoh: 081234567890"
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone.message}</span>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              {...register('email', { 
                required: 'Email wajib diisi',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email tidak valid'
                }
              })}
              className={styles.input}
              placeholder="Contoh: email@domain.com"
              type="email"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email.message}</span>
            )}
          </div>
          
          <div className={styles.paymentMethods}>
            <h3 className={styles.paymentTitle}>Metode Pembayaran</h3>
            <div className={styles.paymentOptions}>
              <label className={styles.paymentOption} style={{
                borderColor: selectedPayment === 'midtrans' ? styles.primaryColor : '#eee'
              }}>
                <input
                  type="radio"
                  value="midtrans"
                  {...register('paymentMethod')}
                />
                <span>Pembayaran Online</span>
                <Image width={50} height={50} src="/payment-methods/midtrans.png" alt="Midtrans" />
              </label>
              
              <label className={styles.paymentOption} style={{
                borderColor: selectedPayment === 'transfer' ? styles.primaryColor : '#eee'
              }}>
                <input
                  type="radio"
                  value="transfer"
                  {...register('paymentMethod')}
                />
                <span>Transfer Bank</span>
                <Image width={50} height={50} src="/payment-methods/bank-transfer.png" alt="Bank Transfer" />
              </label>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
              onClick={() => router.push(`/payment-notif`)}
            >
              <FaLock style={{ fontSize: '0.9rem' }} />
              {isSubmitting ? 'Memproses...' : 'Lanjutkan Pembayaran'}
              <FaArrowRight style={{ fontSize: '0.9rem' }} />
            </button>
          </div>
          
          <div className={styles.securityNote}>
            <FaLock style={{ marginRight: '0.5rem', color: '#666', fontSize: '0.8rem' }} />
            <span style={{ fontSize: '0.8rem', color: '#666' }}>
              Data Anda aman dan terlindungi
            </span>
          </div>
       </form>
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}