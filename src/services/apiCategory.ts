import { Category } from "../types/Category";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`http://localhost:8000/category`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const category: Category[] = await response.json();
    return category;
  } catch (error) {
    console.error("Failed to fetch products", error);
    return [];
  }
};

export const deleteCategory = async (categoryId: string): Promise<void> => {
  try {
    const response = await fetch(
      `http://localhost:8000/category?id=${categoryId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    console.log(`Category with ID ${categoryId} deleted successfully.`);
  } catch (error) {
    console.error("Failed to delete category", error);
  }
};

export const postCategory = async (newCategory: string): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:8000/category`, {
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
