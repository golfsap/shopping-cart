import styled from "styled-components";
import { Minus, Plus } from "lucide-react";
import { CartItem as CartItemType, useCart } from "../context/CartContext";

interface InputRockerProps {
  item: CartItemType;
}

const StyledDiv = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 0.375rem;
  align-items: center;

  button {
    padding: 0.375rem;
    background-color: transparent;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  p {
    font-size: 14px;
    margin-bottom: 0.2rem;
    padding: 0 0.25rem;
  }
`;

function InputRocker({ item }: InputRockerProps) {
  const { addToCart, decreaseQuantity } = useCart();

  return (
    <StyledDiv>
      <button onClick={() => decreaseQuantity(item.id)}>
        <Minus />
      </button>
      <p>{item.quantity}</p>
      <button onClick={() => addToCart(item.id)}>
        <Plus />
      </button>
    </StyledDiv>
  );
}

export default InputRocker;
