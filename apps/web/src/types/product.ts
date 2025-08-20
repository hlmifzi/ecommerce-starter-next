export interface Hospital {
  id: number;
  name: string;
  logo: {
    url: string;
  };
}

export interface Product {
  id: number | string;
  title: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  discounted_price: number | null;
  duration: string;
  additional_info?: any,
  cover_image: {
    url: string;
  };
  hospital: {
    name: string;
    logo?: {
      url: string;
    };
  };
}

export interface StrapiImage {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
      width?: number;
      height?: number;
    };
  };
}

export interface Hospital {
  id: number;
  attributes: {
    name: string;
    logo: StrapiImage;
    description?: string;
  };
}

export interface TrainingAttributes {
  title: string;
  slug: string;
  description: string;
  price: number;
  discounted_price: number | null;
  duration: string;
  cover_image: StrapiImage;
  hospital: {
    data: Hospital;
  };
  additional_info: Array<{
    label: string;
    value: string;
  }>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiTraining {
  id: number;
  attributes: TrainingAttributes;
}

export interface TransformedTraining {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  discounted_price: number | null;
  duration: string;
  cover_image: {
    url: string;
    alt?: string;
  };
  hospital: {
    id: number;
    name: string;
    logo: {
      url: string;
    };
  };
  additional_info: Array<{
    label: string;
    value: string;
  }>;
  createdAt: string;
  updatedAt: string;
}