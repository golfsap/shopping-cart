import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-family: var(--font-secondary);
    padding-bottom: 0.5rem;
  }

  a {
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }
`;

function ErrorPage() {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go Back Home</Link>
    </ErrorContainer>
  );
}

export default ErrorPage;
