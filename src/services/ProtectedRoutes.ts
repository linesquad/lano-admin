import { isAuthenticated } from "./auth";
import { redirect } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    redirect("/login");
  }

  return children;
};

export default ProtectedRoute;
