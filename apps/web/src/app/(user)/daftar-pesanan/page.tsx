'use client';

import { useState } from 'react';
import SharedTabs from '@/components/shared/SharedTabs';
import Card from '@/components/Card';
import Image from 'next/image';

import styles from './order.module.scss';
import SharedBadge from '@/components/shared/SharedBadge';

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
      hospital: "authorized: RS pusat pertamina (RSPP)"
    },
    {
      id: 2,
      name: "Advanced Medical Training",
      price: "Gratis",
      image: "/vaksin.png",
      quantity: 2,
      hospital: "authorized: RS pusat pertamina (RSPP)"
    }
  ]


export default function OrderStatusPage() {
  const [statusOrder, setStatusOrder] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setStatusOrder(newValue);
  };

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
              <SharedBadge text='Pembayaran Selesai' />
            </div>
            <div>
              {MOCK_ORDERS?.map(item => {
                return (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemImage}>
                      <Image width={50} height={50} src={item.image} alt={item.name} />
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
                          <span className={styles.currentPrice}>{item?.price !== "Gratis" ? "Rp" : ""} {item.price.toLocaleString('id-ID')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}