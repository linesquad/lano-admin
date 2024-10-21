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
