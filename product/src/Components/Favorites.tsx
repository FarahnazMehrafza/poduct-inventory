import { useState } from "react";
import ProductCard from "../pages/ProductCard";

// Assuming you have a Product
export interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export default function FavoritePage() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavoriteProducts((prevFavorites) => [...prevFavorites, product]);
  };

  return (
    <div>
      <h1>Favorites Products</h1>
      {favoriteProducts.map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id}
          name={product.name}
          image={product.image}
          price={product.price}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
}