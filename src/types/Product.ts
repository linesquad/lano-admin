export interface Product {
  title: string;
  animalType: string;
  image: string;
  productType: string;
  price: {
    $numberDecimal: string;
  };
  discount: number;
  _id: string;
}

export interface ProductResponse {
  products: Product[];
  page: number;
  lenBtns: number;
}

