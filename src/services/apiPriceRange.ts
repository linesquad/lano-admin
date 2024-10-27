const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const fetchProductsWithPriceRange = async (
  minPrice: string,
  maxPrice: string
) => {
  try {
    const response = await fetch(
      `${URL}product?minPrice=${minPrice}&maxPrice=${maxPrice}`
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
