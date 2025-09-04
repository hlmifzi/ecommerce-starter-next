import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/services/api/product';
import ProductCarousel from '@/components/ProductCarousel';
import Carousel from '@/components/Banner/banner';
import SharedButton from '@/components/shared/SharedButton';
import ScheduleTable from '@/components/ScheduleTable'
import DocumentationCarousel from '@/components/DocumentationCarousel';
import ArticleCarousel from "@/components/ArticleCarousel"
import styles from './home.module.scss';

const visiMisiMock ={
  visi: "Menjadi pusat unggulan dalam penyelenggaraan pelatihan kesehatan yang berkualitas  tinggi, mendorong inovasi, dan menghasilkan tenaga profesional yang siap menghadapi  tantangan dunia kesehatan global.",
  misi: [
  "Menyelenggarakan program pelatihan yang berorientasi pada standar nasional  maupun internasional, menawarkan kurikulum yang komprehensif dan relevan  dengan perkembangan terkini di bidang kesehatan.",
  "Mendukung dan mendorong para peserta pelatihan serta staf untuk berpartisipasi  dalam penelitian, inovasi, dan pengembangan teknologi baru dalam pelayanan  kesehata",
  "Berperan aktif dalam berbagai kegiatan komunitas untuk meningkatkan kesadaran  akan kesehatan, mengadakan program-program pelayanan kesehatan masyarakat,  serta memfasilitasi akses terhadap layanan kesehatan yang berkualitas.",
  "Menghasilkan lulusan yang berkualitas tinggi, siap bersaing secara global, memiliki  kompetensi yang kuat, dan memiliki integritas dalam memberikan pelayanan  kesehatan yang bermut",
  "Membangun dan memperluas kemitraan strategis dengan lembaga-lembaga  pendidikan, organisasi kesehatan, dan pemerintah untuk meningkatkan akses,  kualitas, dan kesetaraan dalam pelayanan kesehata",
],
} 

 const carouselItems = [
    {
      image: '/rspp-building.jpg',
      title: 'RSPP Learning & Training Center',
      description: 'Mengedepankan prinsip continuous improvement atau peningkatan berkelanjutan dalam setiap program yang diselenggarakan.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    },
    {
      image: '/rspp-building.jpg',
      title: 'Tingkatkan Kompetensi Anda Sekarang',
      description: 'Tingkatkan kompetensi tenaga kesehatan dengan pelatihan berkualitas dari rumah sakit terpercaya.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    },
    {
      image: '/rspp-building.jpg',
      title: 'Medical Check Up',
      description: 'Lakukan pemeriksaan kesehatan rutin untuk menjaga kualitas hidup Anda.',
      cta: 'Masuk',
      second_cta: 'Registrasi'
    }
  ];

  const documentationData = [
  {
    id: 2,
    slug: 'seminar-kardiologi',
    image: '/documentation/kegiatan1.jpg',
    date: '22 November 2023',
    title: 'Seminar Kardiologi Internasional',
    type: 'trainig',
    location: 'RSUD Dr. Soetomo, Surabaya'
  },
  {
    id: 3,
    slug: 'workshop-bedah',
    image: '/documentation/kegiatan2.jpg',
    date: '30 November 2023',
    title: 'Workshop Teknik Bedah Modern',
    location: 'FK Universitas Indonesia',
    type: 'webinar',
  },
  {
    id: 4,
    slug: 'sosialisasi-gizi',
    image: '/documentation/kegiatan3.jpg',
    date: '5 Desember 2023',
    title: 'Sosialisasi Gizi Balita',
    location: 'Puskesmas Melati, Bandung'
  },
  {
    id: 5,
    slug: 'penyuluhan-kesehatan',
    image: '/documentation/kegiatan2.jpg',
    date: '12 Desember 2023',
    title: 'Penyuluhan Kesehatan Jiwa',
    location: 'Aula Kelurahan Senen, Jakarta'
  },
  {
    id: 6,
    slug: 'pelatihan-bantuan-hidup',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=300&fit=crop',
    date: '18 Desember 2023',
    title: 'Pelatihan Bantuan Hidup Dasar',
    location: 'RS Mitra Keluarga, Bekasi'
  },
  {
    id: 7,
    slug: 'seminar-onkologi',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&h=350&fit=crop',
    date: '8 Januari 2024',
    title: 'Seminar Onkologi Terkini',
    location: 'RS Kanker Dharmais, Jakarta'
  },
  {
    id: 8,
    slug: 'pelatihan-nicu',
    image: 'https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?w=500&h=300&fit=crop',
    date: '15 Januari 2024',
    title: 'Pelatihan Perawatan NICU',
    location: 'RSUP Dr. Sardjito, Yogyakarta'
  },
  {
    id: 9,
    slug: 'konferensi-keperawatan',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=500&h=350&fit=crop',
    date: '22 Januari 2024',
    title: 'Konferensi Keperawatan Nasional',
    location: 'Hotel Grand Sahid, Jakarta'
  }
];

const articleData = [
  {
    id: 2,
    slug: 'manfaat-meditasi-untuk-kesehatan-mental',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop',
    title: 'Manfaat Meditasi untuk Kesehatan Mental dan Fisik',
    description: 'Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini.',
    date: '12 November 2023',
    views: 892,
    content: 'Konten lengkap artikel...'
  },
  {
    id: 3,
    slug: 'tips-diet-sehat-untuk-pemula',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop',
    title: '10 Tips Diet Sehat untuk Pemula yang Berkelanjutan',
    description: 'Memulai diet sehat bisa menjadi tantangan. Berikut adalah 10 tips praktis untuk pemula yang ingin menjalani diet sehat secara berkelanjutan.',
    date: '8 November 2023',
    views: 1567,
    content: 'Konten lengkap artikel...'
  },
  {
    id: 4,
    slug: 'olahraga-rumah-tanpa-alat',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    title: '7 Olahraga Efektif yang Bisa Dilakukan di Rumah Tanpa Alat',
    description: 'Tidak punya waktu ke gym? Simak 7 olahraga efektif yang bisa dilakukan di rumah tanpa perlu alat khusus.',
    date: '5 November 2023',
    views: 2043,
    content: 'Konten lengkap artikel...'
  },
  {
    id: 3,
    slug: 'tips-diet-sehat-untuk-pemula',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop',
    title: '10 Tips Diet Sehat untuk Pemula yang Berkelanjutan',
    description: 'Memulai diet sehat bisa menjadi tantangan. Berikut adalah 10 tips praktis untuk pemula yang ingin menjalani diet sehat secara berkelanjutan.',
    date: '8 November 2023',
    views: 1567,
    content: 'Konten lengkap artikel...'
  },
];


export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <section id="beranda" className={styles.bannerHomeContainer} >
        <Carousel items={carouselItems} autoPlay={true} interval={5000} />
      </section>
      <section id="pelatihan" className={styles.popularProduct}>
        <div className={styles.header}>
          <h1 className={styles.title}>PELATIHAN TERDEKAT</h1>
        </div>
        <div className={styles.productGrid}>
          <ProductCarousel 
            products={products}
          />
          <Link href="/pelatihan">
            <SharedButton className={styles.btnAll} type='primary'>
              Lihat Semua Kelas
            </SharedButton>
          </Link>
        </div>
      </section>

      <section id="jadwal-pelatihan" className={styles.scheduleDateSection}>
        <ScheduleTable />
      </section>

      <section id="struktur-organisasi" className={styles.ourTeam}>
        <h2 className={styles.title}>TIM KAMI</h2>
        <Image src="/home/SO-LnTC-2.png" width={800} height={500} className={styles.ourTeamImage} alt="our team" />
      </section>

      <section id="tentang-kami" className={styles.aboutUs}>
        <h2 className={styles.title}>TENTANG KAMI</h2>
        <div className={styles.aboutUsContainer}>
          <Image src="/logo-rspp.svg" className={styles.aboutUsImage} width={500} height={200} alt="our team" />
          <article className={styles.aboutUsArticle}>
            RSPP Learning and Training Center merupakan sebuah unit strategis yang didirikan oleh Rumah Sakit Pusat Pertamina (RSPP) untuk mendukung pengembangan kompetensi sumber daya manusia di bidang kesehatan. Dengan semakin kompleksnya kebutuhan layanan kesehatan di era modern, keberadaan RSPP Learning and Training Center menjadi sangat krusial dalam memastikan tenaga kesehatan yang bekerja di RSPP memiliki kualitas unggul dan mampu bersaing secara global. Selain itu, RSPP Learning and Training Center dirancang untuk menjadi pusat pembelajaran yang tidak hanya memberikan pelatihan teknis, tetapi juga menanamkan nilai-nilai profesionalisme, integritas, dan inovasi. Melalui pendekatan ini, RSPP Learning and Training Center bertujuan untuk mencetak tenaga kesehatan yang mampu menjawab tantangan industri kesehatan yang terus berkembang.
          </article>
        </div>
      </section>
      <section id="visi-misi" className={styles.visiMisiSection}>
        <div className={styles.visiMisiContainer}>
          <h2 className={styles.title}>VISI</h2>
          <article>
            {visiMisiMock?.visi}
          </article>
          <h2 className={styles.misiTitle}>MISI</h2>
          <article>
            <ul>
              {visiMisiMock?.misi?.map((misi: string, index: number)=>{
                return(
                  <li key={index}>
                    <span>{index+1}.</span>
                    <p>{misi}</p>
                  </li>
                )
              })}
            </ul>
          </article>
        </div>
      </section>
      <section id="dokumentasi" className={styles.documentationSection}>
        <div className={styles.documentation}>
          <h2 className={styles.title}>DOKUMENTASI KEGIATAN</h2>
          <DocumentationCarousel documentations={documentationData} />
        </div>
      </section>

      <section id="artikel" className={styles.articleSection}>
          <h2 className={styles.titleArticle}>ARTIKEL</h2>
          <p>Kumpulan berita terkini mengenai perkembangan RSPP</p>
          <ArticleCarousel articles={articleData} />
      </section>
    </div>
  );
}