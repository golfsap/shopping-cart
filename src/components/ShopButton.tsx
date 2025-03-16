import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
  padding: 2px 15px;
  background-color: white;
  border: 1px solid white;
  color: #000;
  border-radius: 100px;
  font-weight: 700;
  font-size: 9px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-primary);
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
`;

function ShopButton() {
  return <StyledButton to="/shop">Shop</StyledButton>;
}

export default ShopButton;
