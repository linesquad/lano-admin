import { EditProductInfo } from "../features/PostContext";
import { ProductById } from "../types/ProductById";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const fetchProductById = async (id: string): Promise<ProductById> => {
  try {
    const response = await fetch(`${URL}product?productId=${id}`);
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

export const putProduct = async (
  editedProduct: EditProductInfo
): Promise<EditProductInfo> => {
  try {
    const response = await fetch(`${URL}product`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("update request failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occured");
  }
};
