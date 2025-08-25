import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube   } from "react-icons/fa";
import CertifiedKemenkes from "../CertifiedKemenkes";

import styles from "./footer.module.scss"

const menuLists = [
  {
    title: "Menu",
    menus: [
      {
        text: "Struktur Organisasi",
        url: "#StrukturOrganisasi",
      },
      {
        text: "Tentang Kami",
        url: "#TentangKami",
      },
      {
        text: "Visi Misi",
        url: "#VisiMisi",
      },
      {
        text: "Artikel",
        url: "#Artikel",
      },
      {
        text: "FAQ",
        url: "Rawat Jalan",
      },
    ]
  },
  {
    title: "Informasi",
    menus: [
      {
        text: "Syarat dan Ketentuan",
        url: "/syarat-ketentuan",
      },
      {
        text: "Kebijakan Privasi",
        url: "/kebijakan-privasi",
      },
      {
        text: "Kebijakan Pengembalian",
        url: "/pengembalian-dana",
      },
    ]
  },
  {
    title: "Ikuti Kami",
    menus: [
      {
        icon: <FaInstagram />,
        text: "",
        url: "https://www.instagram.com/rspusatpertamina/",
      },
      {
        icon: <FaFacebook />,
        text:"",
        url: "https://www.facebook.com/rspusatpertamina",
      },
      {
        icon: <FaYoutube />,
        text:"",
        url: "https://www.youtube.com/rspusatpertamina-ihcgroup",
      },
    ]
  },
   {
    title: "Tersertifikasi",
    menus: [
      {
        imgUrl: "/footer/kemenkes-certified.png",
        text: "Tentang Kami",
        url: "our-doctor",
      },
    ]
  },
]

const Footer = () => {

  return (
    <>
      <footer>
        <section className={styles.footerSection}>
          <div className={styles.footerContainer}>
            <div className={styles.information}>
                <Image src={'/logo-rspp.svg'} fill alt="logo-tarining-kesehatan-rspp"/>
                <p>Jl. Kyai Maja No. 43, Kebayoran Baru Jakarta Selatan 12120</p>
                <p>Layanan Pelanggan IHC : 150442</p>
                <p>Email : rspusatpertamina@ihc.id</p>
            </div>
            <div className={styles.listMenuContainer}>
              {menuLists?.map((list, index) => (
                <div key={index} className={styles.listMenuInner}>
                  <h3>{list?.title}</h3>
                  <div className={list?.title !== "Ikuti Kami" ? styles.listItem : styles.flex}>
                    {list?.menus?.map(((menu:any, index: number) => (
                      <div key={index}>
                      {menu?.imgUrl ? (
                        <CertifiedKemenkes menu={menu}/>
                      )
                      : (
                        <Link key={index} className={menu?.text.replace(" ", "")} href={menu.url}>
                          {menu?.icon}
                          {menu?.text}
                        </Link>
                      )}
                      </div>
                    )))}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className={styles.copyRight}>
          <p>&copy; 2025 LNTC Rumah Sakit Pusat Pertamina. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer