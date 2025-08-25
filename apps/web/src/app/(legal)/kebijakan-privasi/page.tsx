import styles from './privacy.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Kebijakan Privasi</h1>
        <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Pendahuluan</h2>
          <p>
            Selamat datang di situs web pelatihan kesehatan kami. Kami berkomitmen untuk melindungi 
            privasi dan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, 
            menggunakan, dan melindungi informasi yang Anda berikan kepada kami.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan informasi berikut:</p>
          <ul>
            <li>Informasi pribadi (nama, alamat email, nomor telepon) yang Anda berikan saat mendaftar</li>
            <li>Data pembayaran yang diperlukan untuk memproses transaksi</li>
            <li>Informasi tentang penggunaan website melalui cookies</li>
            <li>Data progres dan hasil pelatihan yang Anda ikuti</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Penggunaan Informasi</h2>
          <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
          <ul>
            <li>Menyediakan dan mengelola layanan pelatihan kesehatan</li>
            <li>Memproses pembayaran dan mengirimkan konfirmasi</li>
            <li>Mengirim pembaruan dan materi promosi terkait pelatihan</li>
            <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Perlindungan Data</h2>
          <p>
            Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk 
            melindungi data pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Cookies</h2>
          <p>
            Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda. 
            Anda dapat mengatur browser untuk menolak cookies, tetapi hal ini mungkin membatasi 
            fungsi tertentu dari website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Hak Anda</h2>
          <p>Anda memiliki hak untuk:</p>
          <ul>
            <li>Mengakses dan memperbarui informasi pribadi Anda</li>
            <li>Meminta penghapusan data pribadi Anda</li>
            <li>Menolak pemrosesan data untuk tujuan pemasaran</li>
            <li>Mencabut persetujuan pengolahan data kapan saja</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Perubahan Kebijakan</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
            diberitahukan melalui website atau email.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Kontak</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:
            <br />
            Email: privacy@lntc.rspp.com
          </p>
        </section>
      </div>
    </div>
  );
}