'use client';

import { useState, useCallback } from "react"
import SharedTabs from '@/components/shared/SharedTabs';
import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';

import SharedBadge from '@/components/shared/SharedBadge';
import SharedButton from '@/components/shared/SharedButton';
import MidtransModal from '@/components/MidtransModal';
import BadgeProduct from "@/components/BadgeProduct";

import styles from './order.module.scss';
import { MdCalendarToday, MdCalendarViewDay, MdCalendarViewMonth, MdOutlineCalendarMonth } from "react-icons/md";

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
      hospital: "authorized: RS pusat pertamina (RSPP)",
      date: "2025-10-20",
      startTime: "08:00",
      endTime: "12:00",
      location: "Ruang Serbaguna, RS Pusat Pertamina"
    },
    {
      id: 2,
      name: "Advanced Medical Training",
      price: "Gratis",
      image: "/vaksin.png",
      quantity: 2,
      type: "workshop",
      hospital: "authorized: RS pusat pertamina (RSPP)",
      date: "2025-10-22",
      startTime: "09:00",
      endTime: "15:00",
      location: "Auditorium Utama, RS Pusat Pertamina"
    },
    {
      id: 3,
      name: "Webinar Kesehatan Modern",
      price: 80000,
      discountedPrice: 0,
      image: "/nurse-training.png",
      quantity: 1,
      type: "webinar",
      hospital: "authorized: RS pusat pertamina (RSPP)",
      date: "2025-10-25",
      startTime: "14:00",
      endTime: "16:30",
      location: "Online via Zoom"
    },
  ]

// Komponen untuk Google Calendar Button
const GoogleCalendarButton = ({ event }:any) => {
  const createGoogleCalendarURL = () => {
    // Format tanggal dan waktu untuk Google Calendar
    const startDate = new Date(`${event.date}T${event.startTime}`);
    const endDate = new Date(`${event.date}T${event.endTime}`);
    
    // Format untuk URL Google Calendar (YYYYMMDDTHHmmssZ)
    const formatToGoogleDate = (date:any) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
    
    const start = formatToGoogleDate(startDate);
    const end = formatToGoogleDate(endDate);
    
    // Membuat URL untuk menambahkan ke Google Calendar
    const details = `Ikuti pelatihan: ${event.name}`;
    const location = event.location;
    
    const url = new URL('https://calendar.google.com/calendar/render');
    url.searchParams.append('action', 'TEMPLATE');
    url.searchParams.append('text', event.name);
    url.searchParams.append('dates', `${start}/${end}`);
    url.searchParams.append('details', details);
    url.searchParams.append('location', location);
    url.searchParams.append('sf', 'true');
    url.searchParams.append('output', 'xml');
    
    return url.toString();
  };

  return (
      <a 
        href={createGoogleCalendarURL()} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <SharedButton type="secondary">
          <MdOutlineCalendarMonth />
          Tambah ke Kalender
        </SharedButton>
    </a>
  );
};

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
          {MOCK_ORDERS?.map(item => {
            const isPaid = item?.price !== "Gratis"
            // Format tanggal untuk tampilan
            const eventDate = new Date(item.date);
            const formattedDate = eventDate.toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            
            return (
              <Card className={styles.cardContainer}>
                <div className={styles.orderIdHeader}>
                  <p>
                    ID Pesanan:{" "}
                  </p>
                  <b>
                    ID-00000{item.id}
                  </b>
                  <SharedBadge className={styles.statusPayment} text='Menunggu Pembayaran' />
                </div>
                <div>
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.itemImage}>
                        <Image width={50} height={50} src={item.image} alt={item.name} />
                      </div>
                      
                      <div className={styles.itemDetails}>
                        <Link className={styles.itemDetailsLink} href="/pelatihan/product-121">
                        <div className={styles.badgeContainer}>
                          <BadgeProduct type={item?.type} />
                          <BadgeProduct type="warning" />
                        </div>
                          <h3 className={styles.itemName}>{item.name}</h3>
                          <p className={styles.itemHospital}>{item.hospital}</p>
                          <p className={styles.dateTraining}>{formattedDate}</p>
                          <p className={styles.dateTraining}>Waktu: Pukul {item.startTime} - {item.endTime} WIB</p>
                          <p className={styles.location}>Lokasi: {item.location}</p>
                        </Link>

                        <div className={styles.priceContainer}>
                          {item?.discountedPrice ? (
                            <>
                              <span className={styles.originalPrice}>Rp {item.price.toLocaleString('id-ID')}</span>
                              <span className={styles.discountedPrice}>Rp {item?.discountedPrice.toLocaleString('id-ID')}</span>
                            </>
                          ) : (
                            <div className={styles.priceActionContainer}>
                              <span className={styles.currentPrice}>{isPaid ? "Rp" : ""} {item.price.toLocaleString('id-ID')}</span>
                              <div className={styles.actionButtons}>
                                {isPaid && (
                                  <SharedButton onClick={handlePaymentDialog} className={styles.payNow} type='primary' text='Bayar Sekarang' />
                                )}
                                {!isPaid &&
                                  <GoogleCalendarButton event={item} />
                                }
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              </Card>
            )
          })}
        </div>
      )}
      <MidtransModal 
          openPayment={openPayment}
          handleMidtransModal={handlePaymentDialog}
      />
    </div>
  );
}