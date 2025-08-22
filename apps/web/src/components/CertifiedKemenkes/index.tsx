"use client";

import { useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

import SharedButton from "@/components/shared/SharedButton";

const SharedModal = dynamic(() => import("@/components/shared/SharedModal"), {
  ssr: false, 
});

import styles from "../Footer/footer.module.scss"

const CertifiedKemenkes = ({ menu } : any) => {
  const [openCertified, setOpenCertified] = useState(false)

  const handleOpenCertified = () => {
    setOpenCertified((prev) => !prev)
  }
  return (
    <>
      <div className={styles.kemenkesCertified}>
        <Image src={menu?.imgUrl} width={101} height={46} alt="verified-kemenkes"/>
        <p>21 Agustus 2020</p>
        <SharedButton onClick={handleOpenCertified} type="text">
          Detail
        </SharedButton>
      </div>
             
        <SharedModal 
          open={openCertified}
          classNameContainer={styles.midtransModalContainer}
          handleDialog={handleOpenCertified}
          action={
            <div className={styles.actionDialog}>
              <SharedButton onClick={handleOpenCertified} type="primary">
                Tutup
              </SharedButton>
            </div>
          }
        >
          <div className={styles.midtransDummyContainer}>
            <Image 
              src="/footer/certified-image.png" 
              alt="midtrans"
              fill
            />
          </div>
        </SharedModal>
    </>
  )
}

export default CertifiedKemenkes