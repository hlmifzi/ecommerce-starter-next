'use client';

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  FormHelperText
} from "@mui/material";
import {
  PersonOutline as PersonOutlineIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Link from 'next/link';

import styles from "./register.module.scss";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  fullName: string;
  gender: string;
  education: string;
  profession: string;
  phone: string;
  nik: string;
  birthDate: Dayjs | null;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const RegisterPage = () => {

  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      fullName: "",
      gender: "",
      education: "",
      profession: "",
      phone: "",
      nik: "",
      birthDate: null,
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false
    }
  });

  const password = watch("password");

  const onSubmit = (data: RegisterFormData) => {
    router.push("/masuk")
    // Di sini biasanya akan ada API call untuk registrasi
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h4" component="h1" className={styles.pageTitle}>
        Registrasi
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* Baris 1 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Nama lengkap harus diisi" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nama Lengkap"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  size="medium"
                />
              )}
            />
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="gender"
              control={control}
              rules={{ required: "Jenis kelamin harus dipilih" }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.gender}>
                  <InputLabel>Jenis Kelamin</InputLabel>
                  <Select
                    {...field}
                    label="Jenis Kelamin"
                  >
                    <MenuItem value="male">Laki-laki</MenuItem>
                    <MenuItem value="female">Perempuan</MenuItem>
                  </Select>
                  {errors.gender && (
                    <FormHelperText>{errors.gender.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          {/* Baris 2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="education"
              control={control}
              rules={{ required: "Tingkat pendidikan harus dipilih" }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.education}>
                  <InputLabel>Tingkat Pendidikan</InputLabel>
                  <Select
                    {...field}
                    label="Tingkat Pendidikan"
                  >
                    <MenuItem value="S3">S3/Setara</MenuItem>
                    <MenuItem value="S2">S2/Setara</MenuItem>
                    <MenuItem value="S1">S1/Setara</MenuItem>
                    <MenuItem value="SMA">SMA/SMK/Sederajat</MenuItem>
                  </Select>
                  {errors.education && (
                    <FormHelperText>{errors.education.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="profession"
              control={control}
              rules={{ required: "Profesi harus dipilih" }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.profession}>
                  <InputLabel>Profesi</InputLabel>
                  <Select
                    {...field}
                    label="Profesi"
                  >
                    <MenuItem value="Dokter Umum">Dokter Umum</MenuItem>
                    <MenuItem value="Dokter Ahli">Dokter Ahli</MenuItem>
                    <MenuItem value="Perawat">Perawat</MenuItem>
                    <MenuItem value="Bidan">Bidan</MenuItem>
                    <MenuItem value="Farmasi">Farmasi</MenuItem>
                  </Select>
                  {errors.profession && (
                    <FormHelperText>{errors.profession.message}</FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Grid>

          {/* Baris 3 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="phone"
              control={control}
              rules={{ 
                required: "Nomor telepon harus diisi",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Nomor telepon harus berupa angka"
                },
                minLength: {
                  value: 10,
                  message: "Nomor telepon minimal 10 digit"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nomor Telepon Genggam"
                  type="tel"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  size="medium"
                />
              )}
            />
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="nik"
              control={control}
              rules={{ 
                required: "NIK harus diisi",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "NIK harus berupa angka"
                },
                minLength: {
                  value: 16,
                  message: "NIK harus 16 digit"
                },
                maxLength: {
                  value: 16,
                  message: "NIK harus 16 digit"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="NIK"
                  error={!!errors.nik}
                  helperText={errors.nik?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  size="medium"
                />
              )}
            />
          </Grid>

          {/* Baris 4 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="birthDate"
              control={control}
              rules={{ required: "Tanggal lahir harus diisi" }}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...field}
                    label="Tanggal Lahir"
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors.birthDate,
                        helperText: errors.birthDate?.message,
                      },
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </Grid>

              {/* Baris 5 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="password"
              control={control}
              rules={{ 
                required: "Kata sandi harus diisi",
                minLength: {
                  value: 6,
                  message: "Kata sandi minimal 6 karakter"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Kata sandi"
                  type={showPassword ? 'text' : 'password'}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  size="medium"
                />
              )}
            />
          </Grid>
          
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: "Email harus diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid"
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  size="medium"
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ 
                required: "Konfirmasi kata sandi harus diisi",
                validate: value => value === password || "Kata sandi tidak cocok"
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Konfirmasi Kata Sandi"
                  type={showConfirmPassword ? 'text' : 'password'}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  size="medium"
                />
              )}
            />
          </Grid>
        </Grid>
        
        <Box className={styles.privacyPolicyContainer}>
          <Controller
            name="agreeToTerms"
            control={control}
            rules={{ required: "Anda harus menyetujui ketentuan yang berlaku" }}
            render={({ field }) => (
              <FormControl error={!!errors.agreeToTerms}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      {...field}
                      checked={field.value}
                      className={styles.checkboxPrivacy}
                    />
                  }
                  label="Saya setuju dengan ketentuan yang berlaku"
                />
                {errors.agreeToTerms && (
                  <FormHelperText>{errors.agreeToTerms.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
          
          <Typography className={styles.registerText}>
            Sudah punya akun?{" "}
            <MuiLink component={Link} href="/masuk" className={styles.registerCTA}>
              Login
            </MuiLink>{" "}
            sekarang
          </Typography>
        </Box>
        
        <Box className={styles.actionButton}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            className={styles.registerSubmitForm}
            fullWidth
          >
            Registrasi
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;