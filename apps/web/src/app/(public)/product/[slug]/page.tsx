import ProductDetail from '@/components/ProductDetail';
import { getProductBySlug } from '@/services/api/product';

export default async function ProductDetailPage({ 
  params 
}: any) {
  const product = await getProductBySlug(params.slug);
  
  return (
    <ProductDetail product={product} />
  );
}