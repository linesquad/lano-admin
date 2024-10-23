export interface Product {
  title: string;
  brand: string;
  animalType: string;
  image: string;
  productType: string;
  catId: string;
  price: {
    $numberDecimal: string;
  };
  discount: number;
  _id: string;
}

export interface ProductApi {
  brand: string;
  productType: string;
  description: string;
  title: string;
  discount: number;
  animalType: string;
  price: number;
  image: string | null;
  catId: string | null;
  mealDetails: {
    weight: string;
    aroma: string;
    age: string;
    breed: string;
  };
  breed: string;
  code: string;
}

export interface ProductResponse {
  products: Product[];
  page?: number;
  lenBtns?: number;
}

export interface StyleErrorAndLoading {
  width: string;
  height: string;
}

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export interface SearchResponse {
  products: SearchProduct[];
}

export interface SearchProduct {
  _id: string;
  title: string;
  image: string;
  price: {
    $numberDecimal: string;
  };
  discount: number;
}
