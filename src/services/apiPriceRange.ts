export const fetchProductsWithPriceRange = async (
  minPrice: string,
  maxPrice: string
) => {
  try {
    const response = await fetch(
      `http://localhost:8000/product?minPrice=${minPrice}&maxPrice=${maxPrice}`
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
