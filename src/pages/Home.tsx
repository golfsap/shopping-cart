import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 16px;
`;

function Home() {
  const cardData = [
    { title: "Tops", detail: "For those who run to feel free" },
    {
      title: "Shorts",
      detail: "The heart of your kit",
    },
    {
      title: "Headwear",
      detail: "Lightweight elemnetal protection",
    },
  ];

  return (
    <>
      <Header />
      <StyledSection>
        {cardData.map((card) => (
          <SectionCard key={card.title} card={card} />
        ))}
      </StyledSection>
    </>
  );
}

export default Home;
