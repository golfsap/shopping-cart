import styled from "styled-components";

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

  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;

function Checkout() {
  return (
    <StyledDiv>
      <div className="checkoutSummary">
        <p className="subheader">Free delivery unlocked</p>
        <p className="top">
          All prices include taxes and customs duties. Free Returns.
        </p>
        <div className="delivery">
          <p className="deliveryLabel">Delivery</p>
          <p>FREE</p>
        </div>
        <div className="subtotal">
          <p className="subtotalLabel">Subtotal</p>
          <p>52,000 THB</p>
        </div>
      </div>
    </StyledDiv>
  );
}

export default Checkout;
