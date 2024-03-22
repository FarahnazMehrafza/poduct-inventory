import { Product } from "../Components/Favorites";
import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi";
import ProductCard from "../Components/ProductCard";
import { ProductType } from "../types/products";
import "./Home.css";

const addToFavorites = (product: Product) => {
  // Implementation of adding a product to favorites
  console.log(`Adding ${product.name} to favorites`);
};


const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="productContainer">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            addToFavorites={() => addToFavorites(product)} // Ensure it's passed correctly
            rating={undefined}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
