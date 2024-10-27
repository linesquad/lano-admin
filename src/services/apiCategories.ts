import { ProductApi } from "../types/Product";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${URL}category`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};

export const postProduct = async (product: ProductApi) => {
  try {
    const response = await fetch(`${URL}product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Category post failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occured");
  }
};

export const postSubCategory = async ({
  title,
  parentId,
}: {
  title: string;
  parentId: string;
}) => {
  try {
    const response = await fetch(`${URL}category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, parentId }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Category post failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occured");
  }
};

export const fetchByCatId = async (id: string) => {
  try {
    const response = await fetch(`${URL}product?catId=${id}&page=1`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Product fetch failed: " + error.message);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
};
