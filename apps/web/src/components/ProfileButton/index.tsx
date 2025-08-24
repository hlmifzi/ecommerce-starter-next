'use client';

import { useState } from 'react';
import { useAuthStore } from '@/lib/hooks/useAuth'
import { useRouter } from 'next/navigation';
import Popover from '@mui/material/Popover';

import Link from 'next/link';
import SharedButton from '../shared/SharedButton'; // Sesuaikan dengan path komponen Anda

import styles from "./profileButton.module.scss"

const ProfileButton = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null);
  const isLogin = useAuthStore((state:any) => state.isLogin)
  const setIslogOut = useAuthStore((state:any) => state.logout)

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIslogOut();
    router.push("/");
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      {isLogin ? (
        <>
          <div onClick={handleClick} className={styles.profileContainer}>
            <h2 className={styles.profileImage}>
              JD
            </h2>
          </div>
          <Popover
            id={id}
            open={open}
            className={styles.popoverContainer}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className={styles.popoverContent}>
                <div className={styles.profileInformationContainer}>
                  <div className={styles.profileContainer}>
                    <h2 className={styles.profileImage}>
                      JD  
                    </h2>
                  </div>
                  <div>
                    <h2>John Doe</h2>
                    <p>xxx@gmail.com</p>
                  </div>
                </div>
                <div className={styles.containerMenu}>
                  <ul>
                    <Link href={"/daftar-pesanan"}>
                      <li className={styles.itemMenu}>
                        Daftar Transaksi
                      </li>
                    </Link>
                    <li onClick={handleLogout} className={styles.logout}>
                      Keluar
                    </li>
                  </ul>
                </div>
            </div>
          </Popover>
        </>
      ) : (
        <Link href="/masuk">
          <SharedButton type="tertiary">
            Masuk
          </SharedButton>
        </Link>
      )}
    </>
  );
};

export default ProfileButton;