import { Link } from "react-router-dom";
import { CartState } from "../../Context/CartContext";
import "./Navbar.css";

const Navbar = ({ productsData, setProductsData }) => {
  const {
    state: { cart },
  } = CartState();
  return (
    //-------- Navbar --------
    <div className="navbar__container">
      <Link to="/" className="navbar__left links">
        <h2>Teerex Store</h2>
      </Link>
      <div className="navbar__rigth">
        <Link to="/" className="links">
          <h2>Products</h2>
        </Link>
        <Link to="/cart" className="links">
          <img width="32px" src="/Images/cart.png" alt="cart" />
          <span className="cart__count super">{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
