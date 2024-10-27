import { ProductResponse, SearchProduct } from "../types/Product";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const fetchAllProducts = async (
  page: number
): Promise<ProductResponse> => {
  try {
    const response = await fetch(`${URL}product?products=true&page=${page}`);

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data: ProductResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};

export const deleteProductById = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${URL}product?productId=${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    console.log(`Product with ID ${id} has been deleted.`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("SIngle product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occured");
  }
};

export const searchingProduct = async (
  input: string
): Promise<SearchProduct[]> => {
  try {
    const response = await fetch(`${URL}product?searchTerm=${input}`);

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data: SearchProduct[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
