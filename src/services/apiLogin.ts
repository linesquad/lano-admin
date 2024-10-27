import { LoginTypes } from "../types/LoginTypes";

export const loginBoolean = async (creds: LoginTypes): Promise<LoginTypes> => {
  try {
    const response = await fetch(`http://localhost:8000/login`, {
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
