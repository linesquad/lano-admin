export interface Category {
  _id: string;
  title: string;
  parentId: string | null;
  subCategory: SubCategory[];
  products: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SubCategory {
  _id: string;
  title: string;
  parentId: string;
}
