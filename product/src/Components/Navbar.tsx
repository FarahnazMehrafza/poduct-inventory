import { Link } from "react-router-dom";
import { CSSProperties } from "react";



// Define the link style object
const linkStyle: CSSProperties = {
  display: "block",
  color: "white",
  textAlign: "center",
  padding: "14px 20px",
  textDecoration: "none",
};

const Navbar = () => {
  return (
    <>
      <ul style={{ backgroundColor: "#333", overflow: "hidden" }}>
        <li style={{ float: "left" }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={{ float: "left" }}>
          <Link to="/add-product" style={linkStyle}>
            Add Product
          </Link>
        </li>
        
        <li style={{ float: "left" }}>
          <Link to="/favourite" style={linkStyle}>
            Favourite
          </Link>
        </li>


        <li style={{ float: "left" }}>
          <Link to="/editProduct" style={linkStyle}>
          EditProduct
          </Link>
        </li>

        

      </ul>
    </>
  );
};

export default Navbar;
