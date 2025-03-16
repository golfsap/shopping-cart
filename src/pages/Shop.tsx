import styled from "styled-components";
import ProductList from "../components/ProductsList";

const StyledP = styled.p`
  padding: 1.25rem 2.75rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

function Shop() {
  return (
    <>
      <StyledP>Home / Products</StyledP>
      <ProductList />
    </>
  );
}

export default Shop;
