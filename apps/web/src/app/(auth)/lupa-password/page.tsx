"use client";

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';

import SharedButton from "@/components/shared/SharedButton"
import { MdOutlineVisibilityOff, MdPersonOutline } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

import styles from "./login.module.scss"
import { FaEnvelope } from "react-icons/fa";

type Inputs = {
  email: string
  password: string
  confirm_password: string
}

const Login = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit = (data:Inputs) => {
    router.push("/masuk")
  } 

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  return (
    <div className={styles.container}>
      <h1>Lupa Passwod</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email", { required: true })}
          id="outlined-required"
          label="NIK"
          type={"email"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <MdPersonOutline size={"20"} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          {...register("email", { required: true })}
          id="outlined-required"
          label="Email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <FaEnvelope size={"20"} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          {...register("password", { required: true })}
          id="outlined-password-input"
          label="Kata Sandi Baru"
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
        <TextField
          {...register("confirm_password", { required: true })}
          id="outlined-password-input"
          label="Ulangi Kata Sandi"
          type={showPassword2 ? 'text' : 'password'}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  edge="end"
                >
                  {showPassword2 ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <SharedButton 
          buttonType="submit" 
          type="primary" 
          text="Kirim" 
        />
      </form>
    </div>
  )
}

export default Login