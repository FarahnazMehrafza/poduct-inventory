import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";

// Import AddProduct component
import AddProduct  from "../pages/AddProduct";
//import ProductCardProps from "./ProductCard";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import NotFound from "../Components/NotFound";
import { Layout } from "./Layout";

const Main = () => {
  return (
    <div>
      <Navbar />
      {/* Add the rest of your main component content here */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "../pages/Favorites",
        element: <Favorites />,
      },
      {
        path: "../pages/AddProduct", 
         element: <AddProduct
         image="productImageURL"
         name={"Product.Name"}
         description={"Product.Description"} 
         price={"product.Price"}
         rating={4.5}
     />,

      },
    ],
  },
  

]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default Main;

