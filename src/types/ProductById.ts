export interface ProductById {
  animalType: string;
  brand: string;
  catId: string;
  clickCount: number;
  description: string;
  discount: number;
  image: string;
  mealDetails: {
    age: string;
    aroma: string;
    weight: string;
    _id: string;
    _v: string;
  };
  orderCount: number;
  price: {
    $numberDecimal: string;
  };
  productType: string;
  title: string;
  _v: string;
  _id: string;
}

export interface ProductByIdResponse {
  products: ProductById[];
}
