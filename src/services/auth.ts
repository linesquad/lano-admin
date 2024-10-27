export const setupSessionAuth = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}): boolean => {
  if (isAuthenticated) {
    sessionStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

export const logout = (): void => {
  sessionStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = (): boolean => {
  return sessionStorage.getItem("isAuthenticated") === "true";
};
