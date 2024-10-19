import { ProductResponse } from "../types/Product";

export const fetchAllProducts = async (
  page: number
): Promise<ProductResponse> => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?products=true&page=${page}`
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data: ProductResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
