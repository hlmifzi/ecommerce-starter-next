"use client"


import { useDisableInspect } from "@/lib/hooks/useDisableInspect"
import styles from "./layout.module.scss"

export const MainContent = ({children} : any) => {
  if (process.env.NODE_ENV === "production") {
    useDisableInspect();
  }
  
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
