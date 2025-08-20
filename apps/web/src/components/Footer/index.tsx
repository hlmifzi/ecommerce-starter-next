import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube   } from "react-icons/fa";

import styles from "./footer.module.scss"

const menuLists = [
  {
    title: "RELASI",
    menus: [
      {
        text: "Dokter Kami",
        url: "our-doctor",
      },
      {
        text: "Telemedicine",
        url: "telemedicine",
      },
    ]
  },
  {
    title: "LAYANAN",
    menus: [
      {
        text: "Layanan Unggulan",
        url: "Layanan Unggulan",
      },
      {
        text: "Rawat Jalan",
        url: "Rawat Jalan",
      },
      {
        text: "Rawat Inap",
        url: "Rawat Jalan",
      },
      {
        text: "Penunjang Medis",
        url: "Rawat Jalan",
      },
      {
        text: "Fasilitas Umum",
        url: "Rawat Jalan",
      },
    ]
  },
  {
    title: "INFORMASI",
    menus: [
      {
        text: "Tentang Kami",
        url: "our-doctor",
      },
      {
        text: "Kontak Kami",
        url: "telemedicine",
      },
      {
        text: "Berita",
        url: "telemedicine",
      },
      {
        text: "Artikel",
        url: "telemedicine",
      },
      {
        text: "FAQ",
        url: "telemedicine",
      },
      {
        text: "Kebijakan Privasi",
        url: "telemedicine",
      },
    ]
  },
  {
    title: "FOLLOW US",
    menus: [
      {
        icon: <FaInstagram />,
        text: "",
        url: "our-doctor",
      },
      {
        icon: <FaFacebook />,
        text:"",
        url: "telemedicine",
      },
      {
        icon: <FaYoutube />,
        text:"",
        url: "telemedicine",
      },
    ]
  },
]

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.information}>
            <Image src={'/logo-rspp.svg'} fill alt="logo-tarining-kesehatan-rspp"/>
            <p>Jl. Kyai Maja No. 43, Kebayoran Baru Jakarta Selatan 12120</p>
            <p>Call Center IHC : 150442</p>
            <p>Email : rspusatpertamina@ihc.id</p>
        </div>
        <div className={styles.listMenuContainer}>
          {menuLists?.map((list, index) => (
            <div key={index} className={styles.listMenuInner}>
              <h3>{list?.title}</h3>
              <div className={list?.title !== "FOLLOW US" ? styles.listItem : styles.flex}>
                {list?.menus?.map(((menu:any, index: number) => (
                  <Link key={index} href={menu.url}>
                    {menu?.icon}
                    {menu?.text}
                  </Link>
                )))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer