import { useRecoilValue } from "recoil";
import type { TRocket } from "../../../types";
import FlightItem from "../../molecules/FlightItem/FlightItem";
import { Grid, Text } from "./FlightItemsGrid.styled";
import { favoriteListState } from "../../../state/atoms";

const FlightItemsGrid = () => {
  const flights = useRecoilValue(favoriteListState);

  return (
    <>
      {flights.length > 0 ? (
        <Grid>
          {flights.map((item: TRocket) => (
            <FlightItem key={item.id} {...item} isFavorite />
          ))}
        </Grid>
      ) : (
        <Text>No favorite tours found!</Text>
      )}
    </>
  );
};

export default FlightItemsGrid;
