import styled from "styled-components";
import CartList from "../components/CartList";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem 2.75rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  h2 {
    font-size: 24px;
    line-height: 31px;
    font-weight: 900;
  }

  p {
    font-weight: 500;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Link)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 900;
  text-transform: capitalize;
  padding: 1rem 2.5rem;
  border-radius: 0.375rem;
  border: 1px solid;
  color: inherit;
  background-color: transparent;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

function Cart() {
  const [totalItems, setTotalItems] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    setTotalItems(
      cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    );
  }, [cart]);

  return (
    <>
      <StyledHeader>
        <h2>Bag</h2>
        <p>
          {totalItems} {totalItems === 1 ? <>item</> : <>items</>}
        </p>
      </StyledHeader>
      {totalItems === 0 ? (
        <StyledDiv>
          <p>Your bag is empty.</p>
          <StyledButton to={"/shop"}>Continue shopping</StyledButton>
        </StyledDiv>
      ) : (
        <>
          <CartList />
          <Checkout />
        </>
      )}
    </>
  );
}

export default Cart;
