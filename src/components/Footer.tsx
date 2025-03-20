import styled from "styled-components";
import { Instagram, Hash, Youtube } from "lucide-react";

const StyledFooter = styled.footer`
  //   border: 1px solid;
  padding: 3rem 1.25rem;
  background-color: var(--highlight-color);
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 14px;
    font-family: var(--font-secondary);
  }

  .footerDetails {
    padding-bottom: 3rem;
    border-color: rgb(219, 223, 224);
    border-bottom: 1px solid;
    max-width: 1000px;
    margin: 0 auto;
  }

  .footerLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 2rem;
  }

  .icon:hover {
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--medium-grey);
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="footerDetails">
        <h2>Brand Logo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="footerLinks">
        <Instagram className="icon" />
        <Hash className="icon" />
        <Youtube className="icon" />
      </div>
    </StyledFooter>
  );
}

export default Footer;
