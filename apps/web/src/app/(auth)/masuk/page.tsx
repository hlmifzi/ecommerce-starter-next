"use client";

import { useState } from "react"
import { useAuthStore } from '@/lib/hooks/useAuth';
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import Link from 'next/link';
import InputAdornment from '@mui/material/InputAdornment';

import SharedButton from "@/components/shared/SharedButton"
import { MdOutlineVisibilityOff, MdPersonOutline } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

import styles from "./login.module.scss"

type Inputs = {
  nik: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const setIsLogin = useAuthStore((state:any) => state.login)

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit = (data:Inputs) => {
    setIsLogin()
    router.push("/pembayaran")
  } 

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className={styles.container}>
      <h1>Masuk</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("nik", { required: true })}
          id="outlined-required"
          label="NIK"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <MdPersonOutline size={"20"} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          {...register("password", { required: true })}
          id="outlined-password-input"
          label="Kata Sandi"
          type={showPassword ? 'text' : 'password'}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <SharedButton 
          buttonType="submit" 
          type="primary" 
          text="Masuk" 
        />
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