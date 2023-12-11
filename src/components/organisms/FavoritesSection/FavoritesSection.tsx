import { useRecoilState } from "recoil";
import Container from "../../atoms/Container/Container";
import FlightItemsGrid from "../FlightItemsGrid/FlightItemsGrid";
import ClearAllBtn from "../../atoms/Buttons/ClearAllBtn/ClearAllBtn";
import { favoriteListState } from "../../../state/atoms";
import { ButtonWrapper, Section } from "./FavoritesSection.styled";

const FavoritesSection = () => {
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteListState);

  const handleDeleteFav = () => {
    setFavoriteList([]);
  };

  return (
    <Section>
      <Container>
        <ButtonWrapper>
          <ClearAllBtn
            text="Clear all"
            onClick={handleDeleteFav}
            shouldBeShown={!!favoriteList.length}
          />
        </ButtonWrapper>
        <FlightItemsGrid />
      </Container>
    </Section>
  );
};

export default FavoritesSection;
