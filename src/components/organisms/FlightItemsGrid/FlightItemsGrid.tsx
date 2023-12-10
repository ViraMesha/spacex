import { useRecoilValue } from "recoil";
// import { flights } from "../../../utils/data";
import FlightItem from "../../molecules/FlightItem/FlightItem";
import { Grid } from "./FlightItemsGrid.styled";
import { favoriteListState } from "../../../state/atoms";
import type { TRocket } from "../../../types";

const FlightItemsGrid = () => {
  const flights = useRecoilValue(favoriteListState);

  return (
    <Grid>
      {flights.length > 0 &&
        flights.map((item: TRocket) => (
          <FlightItem key={item.id} {...item} isFavorite />
        ))}
    </Grid>
  );
};

export default FlightItemsGrid;
