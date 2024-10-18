import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { setupLocalAuth } from "./services/auth";
import ProtectedRoute from "./services/ProtectedRoutes";
import AppLayout from "./ui/AppLayout";
import Login from "./components/Login";
import Home from "./ui/Home";
import AddProduct from "./ui/AddProduct";
import EditProduct from "./ui/EditProduct";
import Products from "./ui/Products";

function App() {
  useEffect(() => {
    setupLocalAuth();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit" element={<EditProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
