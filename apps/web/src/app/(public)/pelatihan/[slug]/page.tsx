import ProductDetail from '@/components/ProductDetail';
import { getProductBySlug } from '@/services/api/product';

export default async function ProductDetailPage({ 
  params 
}: any) {
  const slug = (await params)?.slug
  const product = await getProductBySlug(slug);
  
  return (
    <ProductDetail product={product} />
  );
}