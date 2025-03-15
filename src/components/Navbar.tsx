import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  // border: 1px solid;
  color: var(--highlight-color);
  background-color: var(--medium-grey);
  padding-top: 33px;
  padding-bottom: 44px;
  padding-left: 2.75rem;
  padding-right: 2.75rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  // border: 1px solid;

  a {
    color: var(--highlight-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <div className="navTitle">
        <h2>Shopping cart</h2>
      </div>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        {/* <a href="#">Cart</a> */}
      </NavLinks>
    </StyledNavbar>
  );
}

export default Navbar;
