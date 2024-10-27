import { Category } from "../types/Category";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${URL}category`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const category: Category[] = await response.json();
    return category;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
};

export const editCategory = async (catId: string | null, title: string) => {
  try {
    const response = await fetch(`${URL}category`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, catId }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (categoryId: string): Promise<void> => {
  try {
    const response = await fetch(`${URL}category?id=${categoryId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    console.log(`Category with ID ${categoryId} deleted successfully.`);
  } catch (error) {
    console.error("Failed to delete category", error);
  }
};

export const postCategory = async (newCategory: string): Promise<void> => {
  try {
    const response = await fetch(`${URL}category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newCategory }),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    console.log(`Category created successfully.`);
  } catch (error) {
    console.error("Failed to create category", error);
    throw error;
  }
};
