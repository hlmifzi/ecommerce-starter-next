'use client';
import Link from 'next/link';
import { useAuthStore } from '@/lib/hooks/useAuth';
import Image from 'next/image';
import Card from '../Card';
import SharedBadge from '../shared/SharedBadge';
import SharedButton from '../shared/SharedButton';

import styles from './product.module.scss';
import { MdCheckBox, MdStars } from 'react-icons/md';
import useWindowSize from '@/lib/hooks/useWindowSize';

const ProductDetail = ({ product }: { product: any }) => {
  const isLogin = useAuthStore((state: any) => state.isLogin);
  const { isMobile } = useWindowSize();
  console.log('this:', product);
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>{product.title}</h1>
        <p>Penyedia Pembelajaran: </p>
        <p>{product?.hospital_name}</p>
      </header>
      <div className={`${styles.productInner} `}>
        <div className={`${styles.productDescription}`}>
          <div className={styles.imageContainer}>
            <Image src={product?.image?.[0]?.url} alt={product.title} fill />
          </div>
          <div>
            <SharedBadge />
          </div>

          {isMobile && <CheckoutBox isLogin={isLogin} product={product} />}

          <div className={`${styles.contentDescription}`}>
            <h2>Tentang Pelatihan</h2>
            <p>{product?.description}</p>
          </div>
          <div className={`${styles.contentDescription}`}>
            <h2>Audiens</h2>
            <ul>
              <li>
                <MdStars size={24} color="#8FC640" />
                <p>
                  Tenaga Vokasi Farmasi <span>(15 SKP)</span>
                </p>
              </li>
              <li>
                <MdStars size={24} color="#8FC640" />
                <p>
                  Tenaga Teknologi Laboratorium Medik <span>(10 SKP)</span>
                </p>
              </li>
            </ul>
          </div>
          <div className={`${styles.contentDescription}`}>
            <h2>Tujuan Pelatihan</h2>
            <p>{product?.description}</p>
          </div>
          <div className={styles.contentDescription}>
            <h2>Kompetensi</h2>
            <ol>
              <li>Melakukan Bantuan Hidup Dasar (BHD)</li>
              <li>Melakukan Bantuan Hidup Dasar (BHD)</li>
              <li>Melakukan Bantuan Hidup Dasar (BHD)</li>
            </ol>
          </div>
          <div className={styles.contentDescription}>
            <h2>Nomor Kontak PIC</h2>
            <SharedButton type="secondary">Heri Sugiarto (+6282299789937)</SharedButton>
          </div>
        </div>

        {!isMobile && <CheckoutBox isLogin={isLogin} product={product} />}
      </div>
    </div>
  );
};

export default ProductDetail;

const CheckoutBox = ({ isLogin, product }: any) => {
  console.log('this:', product);
  return (
    <Card className={styles.boxContainer}>
      <section className={styles.boxContainerInner}>
        {/* box 1 */}
        <div>
          <h3>Anda akan mendapatkan</h3>
          <div className={styles.benefitList}>
            <p>
              <MdCheckBox size={24} />
              <span>Satuan Kredit Profesi (SKP)</span>
            </p>
            <p>
              <MdCheckBox size={24} />
              <span>Satuan Kredit Profesi (SKP)</span>
            </p>
          </div>
        </div>
        {/* box 2 */}
        <div>
          <h3>Detail Pelaksanaan</h3>
          <div className={styles.benefitList}>
            <p>
              <MdCheckBox size={24} />
              <span>Satuan Kredit Profesi (SKP)</span>
            </p>
            <p>
              <MdCheckBox size={24} />
              <span>Satuan Kredit Profesi (SKP)</span>
            </p>
            <p>
              <MdCheckBox size={24} />
              <span>Satuan Kredit Profesi (SKP)</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.benefitList}>
        <p>
          <MdCheckBox />
          <span>10000 total terdaftar</span>
        </p>
      </section>

      {/* Harga */}
      <h3 className={styles.price}>Rp.{product?.price}</h3>

      <div className={styles.btnAction}>
        <Link href={isLogin ? '/keranjang' : '/masuk'}>
          <SharedButton type="secondary">+ Keranjang</SharedButton>
        </Link>
        <Link href={'/pembayaran'}>
          <SharedButton type="primary">Beli Pelatihan</SharedButton>
        </Link>
      </div>
    </Card>
  );
};
