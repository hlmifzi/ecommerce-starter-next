import styles from './terms.module.scss';

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Syarat dan Ketentuan</h1>
        <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Penerimaan Syarat</h2>
          <p>
            Dengan mengakses dan menggunakan website pelatihan kesehatan ini, Anda menyetujui 
            untuk terikat oleh syarat dan ketentuan berikut. Jika Anda tidak setuju dengan 
            syarat dan ketentuan ini, harap jangan menggunakan website kami.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Layanan</h2>
          <p>
            Kami menyediakan berbagai program pelatihan kesehatan melalui platform online. 
            Semua materi pelatihan adalah hak cipta kami dan tidak boleh disalin, didistribusikan, 
            atau dijual kembali tanpa izin tertulis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Pendaftaran Akun</h2>
          <p>
            Untuk mengakses beberapa layanan, Anda perlu membuat akun dengan informasi yang akurat 
            dan lengkap. Anda bertanggung jawab untuk menjaga kerahasiaan kata sandi dan aktivitas 
            yang terjadi dalam akun Anda.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Pembayaran</h2>
          <p>
            Pembayaran untuk layanan kami harus dilakukan sesuai dengan metode yang tersedia. 
            Semua harga sudah termasuk pajak yang berlaku kecuali dinyatakan lain.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Hak Kekayaan Intelektual</h2>
          <p>
            Semua konten, termasuk teks, grafik, logo, dan video, adalah milik kami atau pemberi 
            lisensi kami dan dilindungi oleh undang-undang hak cipta. Anda tidak boleh menggunakan, 
            menyalin, atau mereproduksi konten tanpa izin tertulis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Batasan Tanggung Jawab</h2>
          <p>
            Layanan pelatihan kesehatan kami ditujukan untuk tujuan edukasi dan informasi. 
            Kami tidak bertanggung jawab atas keputusan kesehatan yang dibuat berdasarkan 
            materi pelatihan kami. Konsultasikan dengan profesional kesehatan untuk nasihat medis.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Perubahan Layanan</h2>
          <p>
            Kami berhak untuk mengubah, menangguhkan, atau menghentikan layanan kami kapan saja 
            tanpa pemberitahuan sebelumnya.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Hukum yang Berlaku</h2>
          <p>
            Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Indonesia. 
            Setiap sengketa akan diselesaikan secara eksklusif oleh pengadilan yang berwenang 
            di Indonesia.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Perubahan Syarat dan Ketentuan</h2>
          <p>
            Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan akan 
            efektif setelah diposting di halaman ini.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Kontak</h2>
          <p>
            Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi kami di:
            <br />
            Email: terms@lntc.rspp.com
          </p>
        </section>
      </div>
    </div>
  );
}