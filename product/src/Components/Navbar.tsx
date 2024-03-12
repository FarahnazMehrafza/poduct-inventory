import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Favorite">Favorite</Link> {/* Corrected typo here */}
        </li>
        <li>
          <Link to="/AddProduct">AddProduct</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
