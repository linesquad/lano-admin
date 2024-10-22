import { createContext, Dispatch, SetStateAction, useState } from "react";

export type ProductInfo = {
  productName: string;
  productDescription: string;
  brand: string;
  breed: string;
  weight: string;
  productType: string;
  taste: string;
  productCode: string;
  price: number;
  discount: number;
  discountFlag: boolean;
  animalId: string | null;
  subCategoryId: string | null;
  image: string | null;
};

export interface ProductInfoInterface {
  product: ProductInfo;
  setProduct: Dispatch<SetStateAction<ProductInfo>>;
}

const initialState = {
  product: {
    productName: "",
    productDescription: "",
    brand: "",
    breed: "",
    weight: "",
    productType: "",
    taste: "",
    productCode: "",
    price: 0,
    discount: 0,
    discountFlag: false,
    animalId: "",
    subCategoryId: "",
    image: "",
  },
  setProduct: () => {},
} as ProductInfoInterface;

export const PostContext = createContext(initialState);

type ProductInfoProviderProps = {
  children: React.ReactNode;
};

export default function ProductInfoProvider({
  children,
}: ProductInfoProviderProps) {
  const [product, setProduct] = useState<ProductInfo>({
    productName: "",
    productDescription: "",
    brand: "",
    breed: "",
    weight: "",
    productType: "",
    taste: "",
    productCode: "",
    price: 0,
    discount: 0,
    discountFlag: false,
    animalId: "",
    subCategoryId: "",
    image: "",
  });

  return (
    <PostContext.Provider value={{ product, setProduct }}>
      {children}
    </PostContext.Provider>
  );
}
