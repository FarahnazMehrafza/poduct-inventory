import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import AddProduct component
import AddProduct  from "../pages/AddProduct";
import ProductCardProps from "./ProductCard";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import NotFound from "../Components/NotFound";
import { Layout } from "./Layout";


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
         price={"2"}
         rating={4.5}
     />,

      },
    ],
  },
  
  {
    path: "/signup",
    element: <div>Sign Up</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
