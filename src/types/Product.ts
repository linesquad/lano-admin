export interface Product {
  title: string;
  brand: string;
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
