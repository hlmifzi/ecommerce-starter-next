import styles from './refund.module.scss';

export default function RefundPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Kebijakan Pengembalian Dana</h1>
        <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>1. Kebijakan Umum</h2>
          <p>
            Kami berkomitmen untuk memberikan kualitas terbaik dalam pelatihan kesehatan kami. 
            Jika Anda tidak sepenuhnya puas dengan pembelian, kami menyediakan kebijakan pengembalian dana 
            sesuai dengan ketentuan berikut.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Jangka Waktu Pengembalian</h2>
          <p>
            Permintaan pengembalian dana harus diajukan dalam waktu 14 hari setelah pembelian. 
            Setelah periode ini, tidak ada pengembalian dana yang dapat dilakukan.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Syarat Pengembalian Dana</h2>
          <p>Pengembalian dana hanya berlaku dalam kondisi berikut:</p>
          <ul>
            <li>Anda belum mengakses lebih dari 20% materi pelatihan</li>
            <li>Permintaan diajukan dalam jangka waktu yang ditentukan</li>
            <li>Masalah teknis yang tidak dapat kami selesaikan menghalangi akses ke materi</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Proses Pengembalian Dana</h2>
          <p>
            Untuk meminta pengembalian dana, silakan kirim email ke support@lntc.rspp.com 
            dengan detail pembelian dan alasan permintaan pengembalian dana. Kami akan menanggapi 
            dalam waktu 5 hari kerja.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Metode Pengembalian Dana</h2>
          <p>
            Setelah disetujui, pengembalian dana akan diproses menggunakan metode pembayaran asli 
            dalam waktu 10-14 hari kerja. Biaya administrasi bank mungkin berlaku.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Situasi Khusus</h2>
          <p>
            Dalam keadaan tertentu seperti duplikasi pembelian atau kesalahan teknis dari pihak kami, 
            kami akan memproses pengembalian dana penuh tanpa mempertimbangkan batas akses materi.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Pembatalan Langganan</h2>
          <p>
            Untuk layanan berlangganan, pembatalan dapat dilakukan kapan saja, tetapi pengembalian dana 
            hanya berlaku untuk pembayaran yang dibuat untuk periode yang belum dimanfaatkan.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Pertanyaan</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang kebijakan pengembalian dana kami, jangan ragu 
            untuk menghubungi kami di:
            <br />
            Email: refund@lntc.rspp.com
          </p>
        </section>
      </div>
    </div>
  );
}