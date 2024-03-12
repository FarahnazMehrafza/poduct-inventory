import React from 'react';
import type ProductCardProps from "../Components/ProductCard";

export type ProductCardProps = {
    image: string;
    name: string;
    description: string;
    price: string;
    rating: number;
  };

const AddProduct: React.FC< ProductCardProps> = ({ image, name, description, price, rating }) => {
  // Component logic
  return <div>AddProduct Component</div>;
};

export default AddProduct;