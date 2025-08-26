'use client';

import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  Avatar,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  FormHelperText
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CameraAlt as CameraAltIcon,
  Edit as EditIcon,
  Save as SaveIcon
} from "@mui/icons-material";

import styles from "./profile.module.scss";

// Data dummy untuk profil
const initialProfileData = {
  name: "Nama Lengkap",
  gender: "male",
  education: "S1",
  profession: "Perawat",
  phone: "08123456789",
  nik: "1234567890123456",
  birthDate: "1990-01-01",
  email: "email@contoh.com",
  address: "Alamat lengkap pengguna",
  bio: "Deskripsi singkat tentang diri Anda"
};

// Styled component untuk upload avatar
const ProfileAvatar = styled(Avatar)({
  width: 150,
  height: 150,
  border: "4px solid #e0e0e0",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.8
  }
});

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSave = () => {
    // Validasi sederhana
    const newErrors: Record<string, string> = {};
    
    if (!profileData.name) newErrors.name = "Nama lengkap harus diisi";
    if (!profileData.email) newErrors.email = "Email harus diisi";
    if (!profileData.phone) newErrors.phone = "Nomor telepon harus diisi";
    if (!profileData.nik) newErrors.nik = "NIK harus diisi";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsEditing(false);
    // Di sini biasanya akan ada API call untuk menyimpan data
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { value: unknown } }) => {
    setProfileData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Di sini biasanya akan ada logika untuk upload file
      console.log("File selected:", file.name);
    }
  };

  return (
    <Box className={styles.container}>
      <Typography variant="h4" component="h1" className={styles.pageTitle}>
        Profil Saya
      </Typography>
      
      <Box className={styles.profileContainer}>
          <div className={styles.profileSidebar}>
            <Box className={styles.avatarSection}>
              <Box className={styles.avatarContainer}>
                <ProfileAvatar
                  alt="Profile Photo"
                  src="/default-avatar.png"
                  className={styles.avatar}
                />
                <input
                  accept="image/*"
                  className={styles.avatarInput}
                  id="avatar-upload"
                  type="file"
                  onChange={handleAvatarChange}
                  disabled={!isEditing}
                />
                <label htmlFor="avatar-upload">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    className={styles.avatarButton}
                    disabled={!isEditing}
                  >
                    <CameraAltIcon />
                  </IconButton>
                </label>
              </Box>
              
              {!isEditing && (
                <>
                  <Typography variant="h6" className={styles.userName}>
                    {profileData.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {profileData.profession}
                  </Typography>
                </>
              )}
            </Box>        
            {!isEditing && (
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
                fullWidth
                className={styles.editButton}
              >
                Edit Profil
              </Button>
            )}
                
            {isEditing && (
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                  fullWidth
                  className={styles.saveButton}
                >
                  Simpan Perubahan
                </Button>
                 <Button
                  variant="outlined"
                  onClick={() => setIsEditing(false)}
                  className={styles.cancelButton}
                  fullWidth
                >
                  Batal
                </Button>
              </Grid>
            )}
          </div>
          <Box className={styles.profileForm}>
            <Grid container spacing={2}>
            {/* Baris 1 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Nama Lengkap"
                value={profileData.name}
                onChange={handleChange('name')}
                error={!!errors.name}
                helperText={errors.name}
                disabled={!isEditing}
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth disabled={!isEditing}>
                <InputLabel>Jenis Kelamin</InputLabel>
                <Select
                  value={profileData.gender}
                  label="Jenis Kelamin"
                  onChange={handleChange('gender') as any}
                >
                  <MenuItem value="male">Laki-laki</MenuItem>
                  <MenuItem value="female">Perempuan</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Baris 2 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={profileData.email}
                onChange={handleChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                disabled={!isEditing}
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Nomor Telepon"
                value={profileData.phone}
                onChange={handleChange('phone')}
                error={!!errors.phone}
                helperText={errors.phone}
                disabled={!isEditing}
              />
            </Grid>

            {/* Baris 3 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="NIK"
                value={profileData.nik}
                onChange={handleChange('nik')}
                error={!!errors.nik}
                helperText={errors.nik}
                disabled={!isEditing}
              />
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Tanggal Lahir"
                type="date"
                value={profileData.birthDate}
                onChange={handleChange('birthDate')}
                InputLabelProps={{
                  shrink: true,
                }}
                disabled={!isEditing}
              />
            </Grid>

            {/* Baris 4 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth disabled={!isEditing}>
                <InputLabel>Tingkat Pendidikan</InputLabel>
                <Select
                  value={profileData.education}
                  label="Tingkat Pendidikan"
                  onChange={handleChange('education') as any}
                >
                  <MenuItem value="S3">S3/Setara</MenuItem>
                  <MenuItem value="S2">S2/Setara</MenuItem>
                  <MenuItem value="S1">S1/Setara</MenuItem>
                  <MenuItem value="SMA">SMA/SMK/Sederajat</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth disabled={!isEditing}>
                <InputLabel>Profesi</InputLabel>
                <Select
                  value={profileData.profession}
                  label="Profesi"
                  onChange={handleChange('profession') as any}
                >
                  <MenuItem value="Dokter Umum">Dokter Umum</MenuItem>
                  <MenuItem value="Dokter Ahli">Dokter Ahli</MenuItem>
                  <MenuItem value="Perawat">Perawat</MenuItem>
                  <MenuItem value="Bidan">Bidan</MenuItem>
                  <MenuItem value="Farmasi">Farmasi</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Baris 5 - Full width */}
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Alamat"
                multiline
                rows={3}
                value={profileData.address}
                onChange={handleChange('address')}
                disabled={!isEditing}
              />
            </Grid>

            {/* Baris 6 - Full width */}
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Bio"
                multiline
                rows={3}
                value={profileData.bio}
                onChange={handleChange('bio')}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
        
          </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;