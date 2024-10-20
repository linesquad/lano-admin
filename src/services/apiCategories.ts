export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:8000/category");
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

export const fetchByCatId = async (id: string) => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?catId=${id}&page=1`
    );
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
