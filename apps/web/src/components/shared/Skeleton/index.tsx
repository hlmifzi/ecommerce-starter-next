// components/shared/Skeleton.jsx
"use client";

import { Skeleton, Box } from '@mui/material';
import styles from './skeleton.module.scss';

export const BannerSkeleton = () => (
  <Box className={styles.bannerSkeleton}>
    <Skeleton variant="rectangular" width="100%" height={400} animation="wave" />
    <Box className={styles.bannerContent}>
      <Skeleton variant="text" width="60%" height={40} animation="wave" />
      <Skeleton variant="text" width="80%" height={24} animation="wave" />
      <Box className={styles.bannerActions}>
        <Skeleton variant="rounded" width={120} height={40} animation="wave" />
      </Box>
    </Box>
  </Box>
);

export const ProductCarouselSkeleton = () => (
  <Box className={styles.carouselSkeleton}>
    <Skeleton variant="text" width="40%" height={36} animation="wave" sx={{ mb: 2 }} />
    <Box className={styles.productGrid}>
      {[...Array(4)].map((_, index) => (
        <Box key={index} className={styles.productCard}>
          <Skeleton variant="rectangular" width="100%" height={180} animation="wave" />
          <Skeleton variant="text" width="80%" height={24} animation="wave" />
          <Skeleton variant="text" width="60%" height={20} animation="wave" />
          <Skeleton variant="text" width="40%" height={20} animation="wave" />
          <Skeleton variant="rounded" width="100%" height={36} animation="wave" sx={{ mt: 1 }} />
        </Box>
      ))}
    </Box>
  </Box>
);

export const ScheduleTableSkeleton = () => (
  <Box className={styles.tableSkeleton}>
    <Skeleton variant="text" width="40%" height={36} animation="wave" sx={{ mb: 2 }} />
    <Box className={styles.tableContainer}>
      <Skeleton variant="rectangular" width="100%" height={50} animation="wave" />
      {[...Array(5)].map((_, index) => (
        <Box key={index} className={styles.tableRow}>
          <Skeleton variant="text" width="20%" height={40} animation="wave" />
          <Skeleton variant="text" width="25%" height={40} animation="wave" />
          <Skeleton variant="text" width="15%" height={40} animation="wave" />
          <Skeleton variant="text" width="20%" height={40} animation="wave" />
          <Skeleton variant="rounded" width="10%" height={30} animation="wave" />
        </Box>
      ))}
    </Box>
  </Box>
);