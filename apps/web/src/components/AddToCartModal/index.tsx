"use client"

import dynamic from "next/dynamic"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Grid } from "@mui/material";
import { useCartStore } from '@/lib/hooks/useCart';

const SharedModal = dynamic(() => import("@/components/shared/SharedModal"), {
  ssr: false, 
});

import styles from "./addToCartModal.module.scss"
import SharedButton from "../shared/SharedButton";

const AddToCartModal = () => {
  const router = useRouter()
  const showModal = useCartStore((state:any) => state.showModal);
  const modalItem = useCartStore((state:any) => state.modalItem);
  const hideAddToCartModal = useCartStore((state:any) => state.hideAddToCartModal);

  if (!showModal || !modalItem) return null;

  return (
    <SharedModal
      open={true}
      handleDialog={hideAddToCartModal}
      classNameContainer={styles.addToCartModalContainer}
      title="Berhasil Ditambahkan"
    >
      <Image width={126} height={71} src={modalItem?.image?.[0]?.url} alt="add to cart" />
      
      <Grid className={styles.cartDescContainer}>
        <h2>{modalItem?.title}</h2>
        <Grid container spacing={{ xs: 1, sm: 2 }}  className={styles.buttonActionContainer}>
          <Grid size={{ xs: 12, sm: 6 }} >
            <SharedButton onClick={()=>{
              hideAddToCartModal();
              router.push("/pelatihan");
            }} className={styles.buttonSeeTraining} type="text">
              Cari Pelatihan Lainnya
            </SharedButton>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} >
            <SharedButton onClick={()=>{
              hideAddToCartModal();
              router.push("/keranjang");
            }} className={styles.buttonAddToCart}>
              Lihat Keranjang
            </SharedButton>
          </Grid>
        </Grid>
      </Grid>
    </SharedModal>
  )
}


export default AddToCartModal