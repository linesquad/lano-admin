export interface ICategory {
  _id: string;
  title: string;
  parentId: string | null;
  subCategory: ISubCategory[];
  products: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ISubCategory {
  _id: string;
  title: string;
  parentId: string;
  subCategory: [];
  products: [];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
