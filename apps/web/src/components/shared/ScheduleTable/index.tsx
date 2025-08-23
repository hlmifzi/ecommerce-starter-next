
"use client"
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BadgeProduct from '@/components/BadgeProduct';
import SharedButton from '../SharedButton';

import styles from './scheduleTable.module.scss';

const ScheduleTable = () => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];
  
  // Data jadwal pelatihan
  const trainingData:any = [
    {
      id: 1,
      name: 'Workshop Mitra Bestari Tenaga Kesehatan Lain Pertamedika',
      schedule: [{ month: 2, date: '12-14' }],
      type: 'workshop'
    },
    {
      id: 2,
      name: 'Pelatihan ICU Dasar untuk Perawat',
      schedule: [{ month: 4, date: '5-9' }],
      type: 'training'
    },
    {
      id: 3,
      name: 'Webinar Penerapan Keamanan Pangan (Food Safety) di Rumahsakit',
      schedule: [{ month: 5, date: '20' }],
      type: 'webinar'
    },
  ];

  // State untuk bulan yang sedang ditampilkan (3 bulan sekaligus)
  const [currentQuarter, setCurrentQuarter] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Menghitung bulan yang akan ditampilkan berdasarkan quarter
  const displayedMonths = months.slice(currentQuarter * 3, currentQuarter * 3 + 3);
  
  // Handler untuk navigasi dengan animasi
  const handlePrev = () => {
    if (currentQuarter > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuarter(currentQuarter - 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handleNext = () => {
    if (currentQuarter < 3 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuarter(currentQuarter + 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  // Cek status navigasi
  const isPrevDisabled = currentQuarter === 0 || isAnimating;
  const isNextDisabled = currentQuarter === 3 || isAnimating;

  return (
    <div className={styles.scheduleContainer}>
      <h2 className={`${styles.title} ${styles.fadeInUp}`}>JADWAL PELATIHAN</h2>
      
      <div className={`${styles.navigation} ${styles.fadeInUp}`}>
        <SharedButton
          type='text' 
          onClick={handlePrev} 
          disabled={isPrevDisabled}
          className={isPrevDisabled ? styles.disabled : ''}
        >
          <FaChevronLeft />
        </SharedButton>

        <SharedButton
          type='text' 
          onClick={handleNext} 
          disabled={isNextDisabled}
          className={isNextDisabled ? styles.disabled : ''}
        >
          <FaChevronRight />
        </SharedButton>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th className={`${styles.activityHeader} ${styles.fadeInUp}`}>Nama Kegiatan</th>
              {displayedMonths.map((month, index) => (
                <th 
                  key={month} 
                  className={styles.monthHeader}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {month} {new Date().getFullYear()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trainingData.map((training:any, rowIndex:any) => (
              <tr key={training.id}>
                <td className={`${styles.activityCell} ${styles.fadeInUp}`} style={{ animationDelay: `${0.1 * rowIndex}s` }}>
                  <BadgeProduct type={training?.type} />
                  {" "}{training.name}
                </td>
                {displayedMonths.map((month, colIndex) => {
                  const monthIndex = months.indexOf(month);
                  const scheduleItem = training.schedule.find((item:any) => item.month === monthIndex);
                  
                  return (
                    <td 
                      key={month} 
                      className={styles.dateCell}
                      style={{ animationDelay: `${0.1 * (rowIndex + colIndex)}s` }}
                    >
                      {scheduleItem ? (
                        <span className={`${styles.dateBox} ${styles[training.type]}`}>
                          {scheduleItem.date}
                        </span>
                      ) : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;