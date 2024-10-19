export const setupLocalAuth = () => {
  const username = "micheal obama" as string;
  const password = "12345678" as string;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("isAuthenticated", "false");
};

export const login = (
  inputUsername: string,
  inputPassword: string
): boolean => {
  console.log(inputUsername, " inputUsername");
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
