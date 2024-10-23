import { ProductById } from "../types/ProductById";

export const fetchProductById = async (id: string): Promise<ProductById> => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?productId=${id}`
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data: ProductById = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
