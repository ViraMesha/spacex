import { useRecoilState } from "recoil";
import ClearAllBtn from "../../atoms/Buttons/ClearAllBtn/ClearAllBtn";
import Container from "../../atoms/Container/Container";
import FlightItemsGrid from "../FlightItemsGrid/FlightItemsGrid";
import { ButtonWrapper, Section } from "./FavoritesSection.styled";
import { favoriteListState } from "../../../state/atoms";

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
