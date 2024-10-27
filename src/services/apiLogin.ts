import { LoginTypes } from "../types/LoginTypes";
const URL = "https://lano2024-0b1bbc3f481c.herokuapp.com/";

export const loginBoolean = async (creds: LoginTypes): Promise<LoginTypes> => {
  try {
    const response = await fetch(`${URL}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creds),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Credentials Error", error);
    throw error;
  }
};
