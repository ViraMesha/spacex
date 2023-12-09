import ClearAll from "../../atoms/Buttons/ClearAll/ClearAll";
import Container from "../../atoms/Container/Container";
import FlightItemsGrid from "../FlightItemsGrid/FlightItemsGrid";
import { ButtonWrapper, Section } from "./FavoritesSection.styled";

const FavoritesSection = () => {
  return (
    <Section>
      <Container>
        <ButtonWrapper>
          <ClearAll text="Clear all" />
        </ButtonWrapper>
        <FlightItemsGrid />
      </Container>
    </Section>
  );
};

export default FavoritesSection;
