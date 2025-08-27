"use client"

import AddToCartModal from "@/components/AddToCartModal"

const RootTemplate = ({ children }:any) => {
  return (
    <>
      {children}
      <AddToCartModal />
    </>
  )
}

export default RootTemplate