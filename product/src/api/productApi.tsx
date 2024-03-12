import axios from "axios";
// Get all products
export const getAllproducts=() =>
axios.get("https://fakestoreapi.com/products")
    
}