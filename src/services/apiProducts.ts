import { ProductResponse } from "../types/Product";

export const fetchAllProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await fetch(
      "http://localhost:8000/product?products=true&page=1"
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

export const deleteProductById = async (id: string): Promise<void> => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?productId=${id}`,
      {
        method: "DELETE",
      }
    );
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
