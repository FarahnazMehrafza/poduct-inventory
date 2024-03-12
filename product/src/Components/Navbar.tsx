
import  Link  from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Favprite">Favourite</Link>
        </li>
        <li>
          <Link to="/AddProduct">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
