'use client';

import { useState, useCallback } from "react"
import SharedTabs from '@/components/shared/SharedTabs';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';

import styles from './order.module.scss';
import SharedBadge from '@/components/shared/SharedBadge';
import SharedButton from '@/components/shared/SharedButton';
import MidtransModal from '@/components/MidtransModal';
import BadgeProduct from "@/components/BadgeProduct";

const statusOrderMenu = [
  {
    label: "Semua",
  },
  {
    label: "Menunggu Pembayaran",
  },
  {
    label: "Pembayaran Selesai",
  },
  {
    label: "Dibatalkan",
  }
]


const MOCK_ORDERS = [
    {
      id: 1,
      name: "Training Kesehatan Dasar",
      price: 1200000,
      discountedPrice: 0,
      image: "/nurse-training.png",
      quantity: 1,
      type: "training",
      hospital: "authorized: RS pusat pertamina (RSPP)"
    },
    {
      id: 2,
      name: "Advanced Medical Training",
      price: "Gratis",
      image: "/vaksin.png",
      quantity: 2,
      type: "workshop",
      hospital: "authorized: RS pusat pertamina (RSPP)"
    },
    {
      id: 1,
      name: "Training Kesehatan Dasar",
      price: 80000,
      discountedPrice: 0,
      image: "/nurse-training.png",
      quantity: 1,
      type: "webinar",
      hospital: "authorized: RS pusat pertamina (RSPP)"
    },
  ]


export default function OrderStatusPage() {
  const [statusOrder, setStatusOrder] = useState(0);
	const [openPayment, setOpenPayment] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setStatusOrder(newValue);
  };

  const handlePaymentDialog = () => {
    setOpenPayment((prev:boolean) => !prev)
  }

  return (
    <div className={styles.container}>
      <h1>Daftar Pesanan</h1>
      <SharedTabs
        value={statusOrder}
        handleChange={handleChange}
        tabsMenu={statusOrderMenu}
      />
      {[0, 1, 2, 3].includes(statusOrder) && (
        <div className={styles.myOrderItemContainer}>
          <Card className={styles.cardContainer}>
            <div className={styles.orderIdHeader}>
              <p>
                ID Pesanan:{" "}
                <b>
                  ID-000001
                </b>
              </p>
              <SharedBadge text='Menunggu Pembayaran' />
            </div>
            <div>
              {MOCK_ORDERS?.map(item => {
                const isPaid = item?.price !== "Gratis"
                return (
                  <Link href="/pelatihan/product-121">
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <Image width={50} height={50} src={item.image} alt={item.name} />
                      </div>
                      
                      <div className={styles.itemDetails}>
                        <BadgeProduct type={item?.type} />
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <p className={styles.itemHospital}>{item.hospital}</p>
                        
                        <div className={styles.priceContainer}>
                          {item?.discountedPrice ? (
                            <>
                              <span className={styles.originalPrice}>Rp {item.price.toLocaleString('id-ID')}</span>
                              <span className={styles.discountedPrice}>Rp {item?.discountedPrice.toLocaleString('id-ID')}</span>
                            </>
                          ) : (
                            <div>
                              <span className={styles.currentPrice}>{isPaid ? "Rp" : ""} {item.price.toLocaleString('id-ID')}</span>
                              {isPaid && (
                                <SharedButton onClick={handlePaymentDialog} className={styles.payNow} type='primary' text='Bayar Sekarang' />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Card>
        </div>
      )}
      <MidtransModal 
          openPayment={openPayment}
          handleMidtransModal={handlePaymentDialog}
      />
    </div>
  );
}