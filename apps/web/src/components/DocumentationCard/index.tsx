import Image from 'next/image';
import { useState } from 'react';
import styles from './DocumentationCard.module.scss';
import SharedModal from "../shared/SharedModal";

const DocumentationCard = ({ documentation }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickDocumentation = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className={`${styles.documentationCard}`}
        onClick={handleClickDocumentation}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.imageContainer}>
          <Image 
            src={documentation?.image || '/placeholder-image.jpg'} 
            alt={documentation?.title || 'Dokumentasi Kegiatan'}
            fill
            sizes={"(max-width: 768px) 100vw, 600px"}
            className={styles.documentationImage}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.date}>{documentation?.date || 'Tanggal tidak tersedia'}</p>
          <h3 className={styles.title}>{documentation?.title || 'Judul Dokumentasi'}</h3>
          <p className={styles.location}>{documentation?.location || 'Lokasi tidak tersedia'}</p>
        </div>
      </div>

      <SharedModal
        open={isModalOpen}
        handleDialog={handleCloseModal}
        classNameContainer={styles.modalContainer}
        title={
          <>
            {documentation?.title || 'Judul Dokumentasi'}<br />
            <span className={styles.modalDate}>{documentation?.date || 'Tanggal tidak tersedia'}</span>
          </>
        }
      >
        <div className={styles.modalContent}>
          <div className={styles.modalImageContainer}>
            <Image 
              src={documentation?.image || '/placeholder-image.jpg'} 
              alt={documentation?.title || 'Dokumentasi Kegiatan'}
              fill
              quality={90}
              className={styles.modalImage}
            />
          </div>
           <p className={styles.modalLocation}>{documentation?.location || 'Lokasi tidak tersedia'}</p>
        </div>
      </SharedModal>
    </>
  );
};

export default DocumentationCard;