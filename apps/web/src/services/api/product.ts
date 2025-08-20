import { Product } from '@/types/product';

const STRAPI_API_URL = 'http://localhost:1337/api';
console.log(STRAPI_API_URL, "<<< STRAPI_API_URL")
export async function getProducts() {
  const mocky =  [
    {
        "id": 8,
        "documentId": "iawr5ih4hgnlfe1b5iv0o47y",
        "slug": "product",
        "title": "Training vaksin miningitis",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus tristique enim. Nam finibus nunc et nibh pharetra venenatis. Phasellus tincidunt tortor in lorem consectetur, nec ullamcorper ipsum pretium. Aliquam aliquet nec leo in tristique. Donec vel nulla iaculis, malesuada velit pretium, tristique nisi. Proin ullamcorper sapien sit amet leo mollis, id consectetur magna tempus. Aenean tincidunt volutpat tortor. Sed sit amet auctor ante, eget pretium sapien. Suspendisse sapien dolor, accumsan quis odio quis, posuere blandit leo. Cras bibendum consequat massa sed pretium.",
        "stock": "99999",
        "price": "330000",
        "discounted_price": null,
        "additional_info": "vaksin miigitis murah",
        "createdAt": "2025-08-18T13:25:12.808Z",
        "updatedAt": "2025-08-18T13:28:36.545Z",
        "publishedAt": "2025-08-18T13:28:36.578Z",
        "hospital_name": "RSPP PERTAMINA",
        "hospital_address": null,
        "image": [
            {
                "id": 3,
                "documentId": "xgcgqtco4fhj02bv030exy4x",
                "name": "img_240720241721786835QFPZI.jpg",
                "alternativeText": null,
                "caption": null,
                "width": 1024,
                "height": 1280,
                "formats": {
                    "large": {
                        "ext": ".jpg",
                        "url": "/uploads/large_img_240720241721786835_QFPZI_7578171759.jpg",
                        "hash": "large_img_240720241721786835_QFPZI_7578171759",
                        "mime": "image/jpeg",
                        "name": "large_img_240720241721786835QFPZI.jpg",
                        "path": null,
                        "size": 107.31,
                        "width": 800,
                        "height": 1000,
                        "sizeInBytes": 107313
                    },
                    "small": {
                        "ext": ".jpg",
                        "url": "/uploads/small_img_240720241721786835_QFPZI_7578171759.jpg",
                        "hash": "small_img_240720241721786835_QFPZI_7578171759",
                        "mime": "image/jpeg",
                        "name": "small_img_240720241721786835QFPZI.jpg",
                        "path": null,
                        "size": 39.36,
                        "width": 400,
                        "height": 500,
                        "sizeInBytes": 39359
                    },
                    "medium": {
                        "ext": ".jpg",
                        "url": "/uploads/medium_img_240720241721786835_QFPZI_7578171759.jpg",
                        "hash": "medium_img_240720241721786835_QFPZI_7578171759",
                        "mime": "image/jpeg",
                        "name": "medium_img_240720241721786835QFPZI.jpg",
                        "path": null,
                        "size": 72.05,
                        "width": 600,
                        "height": 750,
                        "sizeInBytes": 72045
                    },
                    "thumbnail": {
                        "ext": ".jpg",
                        "url": "/uploads/thumbnail_img_240720241721786835_QFPZI_7578171759.jpg",
                        "hash": "thumbnail_img_240720241721786835_QFPZI_7578171759",
                        "mime": "image/jpeg",
                        "name": "thumbnail_img_240720241721786835QFPZI.jpg",
                        "path": null,
                        "size": 6.12,
                        "width": 125,
                        "height": 156,
                        "sizeInBytes": 6122
                    }
                },
                "hash": "img_240720241721786835_QFPZI_7578171759",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "size": 150.37,
                "url": "/vaksin.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "createdAt": "2025-08-18T13:28:15.635Z",
                "updatedAt": "2025-08-18T13:28:15.635Z",
                "publishedAt": "2025-08-18T13:28:15.636Z"
            }
        ]
    },
    {
        "id": 41,
        "documentId": "smsj76xojxk98vr3xiv02j4w",
        "slug": "product-1",
        "title": "training2",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus tristique enim. Nam finibus nunc et nibh pharetra venenatis. Phasellus tincidunt tortor in lorem consectetur, nec ullamcorper ipsum pretium. Aliquam aliquet nec leo in tristique. Donec vel nulla iaculis, malesuada velit pretium, tristique nisi. Proin ullamcorper sapien sit amet leo mollis, id consectetur magna tempus. Aenean tincidunt volutpat tortor. Sed sit amet auctor ante, eget pretium sapien. Suspendisse sapien dolor, accumsan quis odio quis, posuere blandit leo. Cras bibendum consequat massa sed pretium.",
        "stock": "99999",
        "price": "100000",
        "discounted_price": 90000,
        "additional_info": "tes",
        "createdAt": "2025-08-19T07:14:27.363Z",
        "updatedAt": "2025-08-19T07:14:50.754Z",
        "publishedAt": "2025-08-19T07:14:50.787Z",
        "hospital_name": "rspp",
        "hospital_address": "jakous",
        "image": [
            {
                "id": 1,
                "documentId": "f1cau0oft3cww7pbky2izsbf",
                "name": "png.jpg",
                "alternativeText": null,
                "caption": null,
                "width": 600,
                "height": 400,
                "formats": {
                    "small": {
                        "ext": ".jpg",
                        "url": "/uploads/small_png_238eb9f042.jpg",
                        "hash": "small_png_238eb9f042",
                        "mime": "image/jpeg",
                        "name": "small_png.jpg",
                        "path": null,
                        "size": 7.8,
                        "width": 500,
                        "height": 333,
                        "sizeInBytes": 7796
                    },
                    "thumbnail": {
                        "ext": ".jpg",
                        "url": "/uploads/thumbnail_png_238eb9f042.jpg",
                        "hash": "thumbnail_png_238eb9f042",
                        "mime": "image/jpeg",
                        "name": "thumbnail_png.jpg",
                        "path": null,
                        "size": 2.88,
                        "width": 234,
                        "height": 156,
                        "sizeInBytes": 2884
                    }
                },
                "hash": "png_238eb9f042",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "size": 11.61,
                "url": "/nurse-training.png",
                "previewUrl": null,
                "provider": "local",
                "provider_metadata": null,
                "createdAt": "2025-08-16T16:45:33.267Z",
                "updatedAt": "2025-08-16T16:45:33.267Z",
                "publishedAt": "2025-08-16T16:45:33.267Z"
            }
        ]
    }
]

  try {
  //  const response = await fetch(
  //   // `${STRAPI_API_URL}/products?populate[hospital][populate][0]=logo&populate[cover_image]=*`,
  //   `${STRAPI_API_URL}/products?populate=ss*`,
  //   {
  //     next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
  //     headers: {
  //       'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
  //     }
  //   }
  // );

    // if (!response.ok) {
    //   throw new Error('Failed to fetch products');
    // }

    // const { data } = await response.json();

    // console.log(data, "<<<< data")
    // return data 
    return  mocky
  } catch (error) {
    console.error('Error fetching trainings:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
    return {
      id: 1,
      title: "Training Vaksin Minginitis & ICV",
      slug: "training-kesehatan-dasar",
      description: "Pelatihan dasar untuk tenaga kesehatan",
      price: 2500000,
      discounted_price: 1200000,
      duration: "3 Hari",
      cover_image: {
        url: "/vaksin.png"
      },
      hospital: {
        name: "RSPP",
        logo: {
          url: "/logo-rspp.png"
        }
      },
      additional_info: [
        { label: "Peserta", value: "Max 20 orang" },
        { label: "Fasilitas", value: "Sertifikat ICV, Modul, Makan Siang" }
      ]
    }
  const res = await fetch(
    `${STRAPI_API_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
  );
  const data = await res.json();
  return data.data[0];
}