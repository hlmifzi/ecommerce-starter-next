import { Input, Select, DatePicker, Checkbox } from "antd";

import Link from 'next/link';
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

import SharedButton from "@/components/shared/SharedButton"

import styles from "./register.module.scss"

const Login = () => {
  return (
    <div className={styles.container}>
      <h1>Registrasi </h1>
      <form>
        <div className={styles.formContainer}>
          <div className={styles.inputLeftRegister}>
            <Input 
              placeholder="Nama Lengkap"
              size="large"
              allowClear 
              addonAfter={<MdPersonOutline />}
            />
            <Select 
              placeholder="Jenis Kelamin" 
              size="large"
              options={[
                { 
                  value: 'male', label: <span>Laki-laki</span>
                },
                { 
                  value: 'female', label: <span>Perempuan</span>
                },
              ]} 
            />
            <Select 
              size="large"
              placeholder="Tingkat Pendidikan" 
              options={[
                { 
                  value: 'S3', label: <span>S3/Setara</span>
                },
                { 
                  value: 'S2', label: <span>S2/Setara</span>
                },
                { 
                  value: 'S1', label: <span>S1/Setara</span>
                },
                { 
                  value: 'SMA', label: <span>SMA/SMK/Sederajat</span>
                },
              ]} 
            />
            <Select
              size="large"
              placeholder="Profesi" 
              options={[
                { 
                  value: 'S3', label: <span>Dokter Umum</span>
                },
                { 
                  value: 'S2', label: <span>Dokter Ahli</span>
                },
                { 
                  value: 'S1', label: <span>Perawat</span>
                },
                { 
                  value: 'SMA', label: <span>Bidan</span>
                },
                { 
                  value: 'SMA', label: <span>Farmasi</span>
                },
              ]} 
            />
            <Input 
              size="large"
              placeholder="Nomor Telepon Genggam"
              type="number"
              allowClear 
            />
          </div>
          <div className={styles.inputRightRegister}>

            <Input 
              size="large"
              placeholder="NIK"
              allowClear 
              addonAfter={<MdPersonOutline />}
            />

            <DatePicker placeholder="Tanggal Lahir" picker="year" />
             <Input 
              size="large"
              placeholder="Email"
              type="email"
              allowClear 
            />
            <Input 
              size="large"
              placeholder="Kata sandi"
              type="password"
              allowClear 
              addonAfter={<MdOutlineVisibility />}
            />
            <Input 
              size="large"
              placeholder="Konfirmasi Kata Sandi"
              type="password"
              allowClear 
              addonAfter={<MdOutlineVisibility />}
            />
          </div>
        </div>
        <div className={styles.privacyPolicyContainer}>
          <p>
            <Checkbox className={styles.checkboxPrivay} />
            Saya setuju dengan ketentuan yang berlaku
          </p>
          <p className={styles.registerText}>
            Sudah punya akun? {" "}
            <Link href="/masuk" className={styles.registerCTA}>
              Login
            </Link>{" "}
            sekarang
          </p>
        </div>
        <div className={styles.actionButton}>
          <Link href="/masuk" className={styles.registerSubmitForm}>
            <SharedButton type="secondary" text="Registrasi" />
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login