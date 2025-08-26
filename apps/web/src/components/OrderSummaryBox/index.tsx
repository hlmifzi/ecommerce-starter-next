"use client"

import { useState, useCallback, useEffect } from "react"
import { FaLock, FaChevronDown, FaChevronUp, FaTrash } from 'react-icons/fa';
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

import { useAuthStore } from '@/lib/hooks/useAuth';

import MidtransModal from "@/components/MidtransModal";
import SharedButton from "@/components/shared/SharedButton";


import styles from './orderSummaryBox.module.scss';

type orderSummaryBoxType ={ 
  withPaymentButton?: {
    text: any
  }
  cartItems?: any;
  withCartDetail?: boolean
}

const OrderSummaryBox = ({
  withPaymentButton,
  withCartDetail = false,
  cartItems =  [
    {
      id: 1,
      name: "Training Kesehatan Dasar",
      price: 1200000,
      discountedPrice: 0,
      image: "/nurse-training.png",
      quantity: 1,
      hospital: "authorized: RS pusat pertamina (RSPP)"
    },
    {
      id: 2,
      name: "Advanced Medical Training",
      price: 2500000,
      image: "/vaksin.png",
      quantity: 2,
      hospital: "authorized: RS pusat pertamina (RSPP)"
    }
  ],
} : orderSummaryBoxType) => {
  const router = useRouter()
  const pathname = usePathname()
	const [openPayment, setOpenPayment] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(true)
	const isLogin = useAuthStore((state:any) => state.isLogin)

  
  const subtotal = cartItems.reduce((sum:any, item:any) => {
    return sum + (item?.discountedPrice || item.price) * item.quantity;
  }, 0);

  
	
  const handlePaymentDialog = useCallback(
    () => {
      if(pathname === "/keranjang") {
        router.push("/pembayaran")
      } else {
       isLogin ? setOpenPayment(prev => !prev) : router.push("/masuk");
      }
    },
    [pathname],
  );
  

  return (
      <div className={styles.orderSummaryContainer}>
        {withCartDetail && (
          <>
            <div className={styles.orderDetailCollapse} onClick={() => setIsOpenDetail((prev:any)=>!prev)}>
              <h2>Ringkasan Pemesanan</h2>
              {isOpenDetail ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpenDetail && (
              <div className={styles.cartItems}>
                {cartItems.map((item:any, index: number) => (
                  <Link key={index} href={"/pelatihan/1212"}>
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <Image width={60} height={0} src={item.image} alt={item.name} />
                      </div>
                      
                      <div className={styles.itemDetails}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <p className={styles.itemHospital}>{item.hospital}</p>
                        <div className={styles.priceContainer}>
                          {item?.discountedPrice ? (
                            <>
                              <span className={styles.originalPrice}>Rp {item.price.toLocaleString('id-ID')}</span>
                              <span className={styles.discountedPrice}>Rp {item?.discountedPrice.toLocaleString('id-ID')}</span>
                            </>
                          ) : (
                            <span className={styles.currentPrice}>Rp {item.price.toLocaleString('id-ID')}</span>
                          )}
                        </div>
                      </div>
                      {pathname !== "/status-pembayaran" &&
                        <button className={styles.removeButton}>
                          <FaTrash />
                        </button>
                      }
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
        <div className={styles.cartSummary}>
          <div className={styles.summaryRow}>
            <span>Total (2)</span>
            <span className={styles.totalPrice}>Rp {(subtotal + 5000).toLocaleString('id-ID')}</span>
          </div>
          {withPaymentButton && (
            <>
              <SharedButton 
                type="primary" 
                onClick={handlePaymentDialog} 
                className={styles.checkoutButton}
              >
                {withPaymentButton?.text}
              </SharedButton>
               <div className={styles.securityNote}>
                  <FaLock/>
                  <span>
                    Data Anda aman dan terlindungi
                  </span>
                </div>
            </>
          )}
        </div>
        <MidtransModal  
          openPayment={openPayment}
          handleMidtransModal={handlePaymentDialog}
        />
    </div>
  )
}


export default OrderSummaryBox