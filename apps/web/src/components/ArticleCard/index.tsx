import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import SharedButton from '@/components/shared/SharedButton';
import styles from './articleCard.module.scss';

const ArticleCard = ({ article }: any) => {
  return (
    <div className={styles.articleCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={article?.image || '/placeholder-article.jpg'} 
          alt={article?.title || 'Artikel'}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className={styles.articleImage}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{article?.title || 'Judul Artikel'}</h3>
        
        <p className={styles.description}>
          {article?.description || 'Deskripsi artikel tidak tersedia.'}
        </p>
        
        <div className={styles.metaInfo}>
          <span className={styles.date}>
            {article?.date || 'Tanggal tidak tersedia'}
          </span>
          
          <div className={styles.viewCount}>
            <FaEye className={styles.eyeIcon} />
            <span>{article?.views || 0}</span>
          </div>
        </div>
        
        <div className={styles.actionButton}>
          <Link href={`/artikel/${article?.slug || '#'}`} passHref>
            <SharedButton type="primary">
              Baca Selengkapnya
            </SharedButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;