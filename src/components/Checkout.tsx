import styled from "styled-components";
import { useMemo } from "react";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsDataProvider";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 2.75rem;
  background-color: rgb(248 249 249);

  .checkoutSummary {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p.subheader {
    border-bottom: 3px solid;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    padding-bottom: 0.5rem;
  }

  .top {
    font-size: 12px;
    font-weight: 400;
  }

  .delivery,
  .subtotal {
    display: flex;
    justify-content: space-between;
  }

  .deliveryLabel {
    font-size: 14px;
    font-weight: 900;
  }

  .delivery {
    font-size: 12px;
  }

  .subtotalLabel {
    font-size: 15px;
    font-weight: 900;
  }

  .subtotal {
    font-size: 14px;
  }

  button {
    font-size: 14px;
    background-color: black;
    color: white;
    border-color: black;
    border-radius: 0.375rem;
    font-weight: 900;
    padding: 1.25rem;
    text-align: center;
  }

  button: hover {
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;

function Checkout() {
  const { cart } = useCart();
  const products = useProducts();

  const subtotal = useMemo(() => {
    const total = cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? sum + product.price * item.quantity : sum;
    }, 0);
    return Math.round(total * 100) / 100;
  }, [cart, products]);

  return (
    <StyledDiv>
      <div className="checkoutSummary">
        <p className="subheader">Free standard delivery unlocked</p>
        <p className="top">
          All prices include taxes and customs duties. Free Returns.
        </p>
        <div className="delivery">
          <p className="deliveryLabel">Delivery</p>
          <p>FREE</p>
        </div>
        <div className="subtotal">
          <p className="subtotalLabel">Subtotal</p>
          <p>{subtotal} USD</p>
        </div>
        <button onClick={() => alert("This is just a fake site!")}>
          Checkout
        </button>
      </div>
    </StyledDiv>
  );
}

export default Checkout;
