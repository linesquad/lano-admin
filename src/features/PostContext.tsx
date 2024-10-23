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
  subCategoryTitle: string;
  animalTitle: string;
};
export type EditProductInfo = {
  brand: string;
  _id: string;
  productType: string;
  description: string;
  title: string;
  animalType: string;
  code: string;
  breed: string;
  price: number;
  discount: number;
};

export interface ProductInfoInterface {
  product: ProductInfo;
  setProduct: Dispatch<SetStateAction<ProductInfo>>;
  editProduct: EditProductInfo;
  setEditProduct: Dispatch<SetStateAction<EditProductInfo>>;
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
    animalId: null,
    subCategoryId: null,
    image: null,
    subCategoryTitle: "",
    animalTitle: "",
  },
  setProduct: () => {},
  editProduct: {
    brand: "",
    _id: "",
    productType: "",
    description: "",
    title: "",
    animalType: "",
    code: "",
    breed: "",
    price: 0,
    discount: 0,
  },
  setEditProduct: () => {},
} as ProductInfoInterface;

export const PostContext = createContext(initialState);

type ProductInfoProviderProps = {
  children: React.ReactNode;
};

export default function ProductInfoProvider({
  children,
}: ProductInfoProviderProps) {
  const [product, setProduct] = useState<ProductInfo>(initialState.product);
  const [editProduct, setEditProduct] = useState<EditProductInfo>(
    initialState.editProduct
  );

  return (
    <PostContext.Provider
      value={{ product, setProduct, editProduct, setEditProduct }}
    >
      {children}
    </PostContext.Provider>
  );
}
