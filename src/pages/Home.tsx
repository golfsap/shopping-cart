import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import NewArrivalsSection from "../components/NewArrivalsSection";
import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: 16px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

function Home() {
  const cardData = [
    { title: "Tops", detail: "Lorem ipsum dolor sit amet" },
    {
      title: "Shorts",
      detail: "consectetur adipiscing elit",
    },
    {
      title: "Headwear",
      detail: "sed do eiusmod tempor incididunt",
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
      <NewArrivalsSection />
    </>
  );
}

export default Home;
