export const setupLocalAuth = () => {
  const username = "micheal obama" as string;
  const password = "12345678" as string;

  localStorage.setItem("usename", username);
  localStorage.setItem("password", password);
};

export const login = (
  inputUsername: string,
  inputPassword: string
): boolean => {
  const storedUsername = localStorage.getItem("username") as string;
  const storedPassword = localStorage.getItem("password") as string;

  if (inputUsername === storedUsername && inputPassword === storedPassword) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }

  return false;
};

export const logout = (): void => {
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("isAuthenticated") === "true";
};
