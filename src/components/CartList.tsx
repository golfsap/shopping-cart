import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsDataProvider";
import styled from "styled-components";
import CartItem from "./CartItem";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem 2.75rem;
  list-style: none;
`;

function CartList() {
  const { cart } = useCart();
  const products = useProducts();

  return (
    <StyledList className="cartList">
      {cart.map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);

        return product ? (
          <li key={product.id}>
            <CartItem item={cartItem} product={product} />
          </li>
        ) : null;
      })}
    </StyledList>
  );
}

export default CartList;
