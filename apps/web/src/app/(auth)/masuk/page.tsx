import { Input } from "antd";
import Link from 'next/link';
import styles from "./login.module.scss"

import SharedButton from "@/components/shared/SharedButton"
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Masuk</h1>
      <form className={styles.formContainer}>
        <div>
          <label>NIK</label>
          <Input 
            allowClear 
            addonAfter={<MdPersonOutline />}
          />
        </div>
        <div>
          <label>Kata Sandi</label>
          <Input 
            type="password"
            allowClear 
            addonAfter={<MdOutlineVisibility />}
            />
        </div>
        <Link href="/pembayaran">
          <SharedButton type="primary" text="Masuk" />
        </Link>
        <p className={styles.registerText}>
          Belum punya akun?{" "}
          <Link href="/daftar">
            <span className={styles.registerCTA}>Registrasi</span> 
          </Link>{" "}
          sekarang
        </p>
      </form>
    </div>
  )
}

export default Login