interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
  dFlag: boolean;
  currentPrice: string;
}

export const fetchAllProducts = async (): Promise<unknown | Product[]> => {
  try {
    const response = await fetch(
      "http://localhost:8000/product?products=true&page=1"
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data: Product[] = await response.json();
    console.log(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Product fetch fail:" + error.message);
      return error;
    }
  }
};
