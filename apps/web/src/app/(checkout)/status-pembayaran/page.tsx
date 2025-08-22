import PaymenStatus from "@/components/PaymentStatus/page"
import { getProducts } from "@/services/api/product"
const PaymentStatusPage = async () => {
    const products = await getProducts();
  
  return (
    <PaymenStatus products={products} />
  )
}

export default PaymentStatusPage