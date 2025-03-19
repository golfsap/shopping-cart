import styled from "styled-components";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-around;
  color: var(--highlight-color);
  background-color: var(--medium-grey);
  padding: 28px 20px;

  .navTitle a {
    text-decoration: none;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
    color: white;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    color: var(--highlight-color);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    font-family: var(--font-secondary);
    font-weight: 500;
  }

  .cartIcon {
    position: relative;
  }

  .cartBadge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: red;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    opacity: 0.9;
    animation: pop 0.3s ease-in-out;
  }

  a:hover {
    text-decoration: underline;
  }

  @keyframes pop {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

function Navbar() {
  const { cart } = useCart();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setItemCount(totalItems);
  }, [cart]);

  return (
    <StyledNavbar>
      <div className="navTitle">
        <Link to="/">
          <h2>Brand Logo</h2>
        </Link>
      </div>
      <NavLinks>
        <Link to="/">Home </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cartIcon">
          <ShoppingBag />
          {itemCount > 0 && <span className="cartBadge">{itemCount}</span>}
        </Link>
      </NavLinks>
    </StyledNavbar>
  );
}

export default Navbar;
