import styled from "styled-components";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
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

  a:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
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
        <Link to="/cart">
          <ShoppingBag />
        </Link>
      </NavLinks>
    </StyledNavbar>
  );
}

export default Navbar;
