import { useRecoilState } from "recoil";
import ClearAllBtn from "../../atoms/Buttons/ClearAllBtn/ClearAllBtn";
import Container from "../../atoms/Container/Container";
import FlightItemsGrid from "../FlightItemsGrid/FlightItemsGrid";
import { ButtonWrapper, Section } from "./FavoritesSection.styled";
import { favoriteListState } from "../../../state/atoms";

const FavoritesSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setFavoriteList] = useRecoilState(favoriteListState);

  const handleDeleteFav = () => {
    setFavoriteList([]);
  };

  return (
    <Section>
      <Container>
        <ButtonWrapper>
          <ClearAllBtn text="Clear all" onClick={handleDeleteFav} />
        </ButtonWrapper>
        <FlightItemsGrid />
      </Container>
    </Section>
  );
};

export default FavoritesSection;