import ArticleDetail from '@/components/ArticleDetail';

const articleData = [
  {
    id: 2,
    slug: 'manfaat-meditasi-untuk-kesehatan-mental',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop',
    title: 'Manfaat Meditasi untuk Kesehatan Mental dan Fisik',
    description: 'Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini. Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini. Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini. Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini. Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini.Meditasi tidak hanya baik untuk kesehatan mental tetapi juga memberikan dampak positif bagi kesehatan fisik. Temukan berbagai manfaatnya dalam artikel ini.',
    date: '12 November 2023',
    views: 892,
    content: 'Konten lengkap artikel...'
  },
];


export default async function ProductDetailPage({ 
  params 
}: any) {
  const title = (await params)?.title
  
  return (
    <ArticleDetail product={articleData[0]} />
  );
}