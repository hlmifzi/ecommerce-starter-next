'use client';
import Link from 'next/link';
import { useAuthStore } from '@/lib/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StarsIcon from '@mui/icons-material/Stars';

import Card from '../Card';
import SharedBadge from '@/components/shared/SharedBadge';
import SharedButton from '@/components/shared/SharedButton';
import AddToCartModal from '@/components/AddToCartModal';

import useWindowSize from '@/lib/hooks/useWindowSize';
import { formatPriceRupiah } from '@/lib/function/formatPriceRupiah';
import { useCartStore } from '@/lib/hooks/useCart';


import styles from './productDetail.module.scss';

const ProductDetail = ({ product }: { product: any }) => {
  const isLogin = useAuthStore((state: any) => state.isLogin);
  const { isMobile } = useWindowSize();

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
                <StarsIcon />
                <p>
                  Tenaga Vokasi Farmasi <span>(15 SKP)</span>
                </p>
              </li>
              <li>
                <StarsIcon />
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
  const router = useRouter()
  const showAddToCartModal = useCartStore((state:any) => state.showAddToCartModal);
  
  return (
    <Card className={styles.boxContainer}>
      <section className={styles.boxContainerInner}>
        {/* box 1 */}
        <div>
          <h3>Anda akan mendapatkan</h3>
          <div className={styles.benefitList}>
            <p>
              <CheckBoxOutlinedIcon  />
              <span>Satuan Kredit Profesi (SKP)</span>
            </p>
            <p>
              <AccessTimeOutlinedIcon />
              <span>Sertifikat kelulusan</span>
            </p>
            <p>
              <WorkspacePremiumIcon  />
              <span>Sertifikat kelulusan</span>
            </p>
          </div>
        </div>
        {/* box 2 */}
        <div>
          <h3>Detail Pelaksanaan</h3>
          <div className={styles.benefitList}>
            <p>
              <CalendarMonthIcon />
              <span>28 April 2025 - 30 April 2025 </span>
            </p>
            <p>
              <AccessTimeOutlinedIcon />
              <span>08.00 - 23.00 WIB</span>
            </p>
            <p>
              <LocationPinIcon />
              <span>Hybrid (Luring & Daring)</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.benefitList}>
        <p>
          <PersonOutlineOutlinedIcon />
          <span>10000 total terdaftar</span>
        </p>
      </section>

      {/* Harga */}
      <h3 className={styles.price}>{formatPriceRupiah(product?.price)}</h3>

      <div className={styles.btnAction}>
        <SharedButton onClick={() => isLogin ? showAddToCartModal({
              id: 12122,
              title: "Training Kesehatan Dasar",
              price: 1200000,
              discountedPrice: 0,
              image: [{
                url: "/nurse-training.png"
              }],
              quantity: 1,
              hospital: "Penyedia: RS pusat pertamina (RSPP)",
            }) : router.push("/masuk")} type="secondary">+ Keranjang</SharedButton>
        <Link href={'/pembayaran'}>
          <SharedButton type="primary">Beli Pelatihan</SharedButton>
        </Link>
      </div>
    </Card>
  );
};
