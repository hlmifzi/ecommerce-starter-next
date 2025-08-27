"use client"

import { useState, useMemo, useCallback, useEffect } from "react"
import { FaLock, FaChevronDown, FaChevronUp, FaTrash } from 'react-icons/fa';
import { usePathname, useRouter, redirect } from "next/navigation";
import Link from 'next/link';
import Image from 'next/image';

import { useAuthStore } from '@/lib/hooks/useAuth';
import { useCartStore } from '@/lib/hooks/useCart';

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
} : orderSummaryBoxType) => {
  const router = useRouter()
  const pathname = usePathname()
	const [openPayment, setOpenPayment] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(true)
	const isLogin = useAuthStore((state:any) => state.isLogin)
  const cartItems = useCartStore((state:any) => state.cartItems)
  const removeFromCart = useCartStore((state: any) => state.removeFromCart);

  
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

  const isEmpty = useMemo(() => !cartItems?.length, [cartItems])
  
  useEffect(() => {
    if(isEmpty && pathname !== "/keranjang") redirect("/pelatihan");
  }, [isEmpty])
  

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
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemImage}>
                      <Image width={60} height={0} src={item.image} alt={item.name} />
                    </div>
                    <Link key={index} href={"/pelatihan/1212"}>
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
                    </Link>
                    {pathname !== "/status-pembayaran" &&
                      <button onClick={() => removeFromCart(item?.id)} className={styles.removeButton}>
                        <FaTrash />
                      </button>
                    }
                  </div>
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
                disabled={isEmpty}
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