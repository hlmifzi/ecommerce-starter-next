'use client';

import Image from 'next/image';
import { useAuthStore } from '@/lib/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import OrderSummaryBox from '@/components/OrderSummaryBox';
// import midtransClient from 'midtrans-client';

import styles from './checkout.module.scss';

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
  const isLogin = useAuthStore((state:any) => state.isLogin)
  
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
        {isLogin && (
          <div className={styles.buyerInformationContainer}> 
            <div className={styles.header}>
              <h1 className={styles.title}>Informasi Pembeli</h1>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Nama Lengkap</label>
              <p>helmi fauzi</p>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Nomor WhatsApp</label>
              <p>0819 0920 0921</p>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <p>helmi.fauzi@ihc.id</p>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Profesi</label>
              <p>Dokter Ahli Penyakit Dalam</p>
            </div>
          </div>
        )}   
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
      </div>
      <div>
        <OrderSummaryBox 
          withCartDetail
          withPaymentButton={{
            text: (
              <div className={styles.buttonPay}>
                {isSubmitting ? 'Memproses...' : (<>
                  <p>Bayar</p><FaArrowRight/>
                </>)}
              </div>
            )
          }} 
        />
      </div>
    </div>
  );
}