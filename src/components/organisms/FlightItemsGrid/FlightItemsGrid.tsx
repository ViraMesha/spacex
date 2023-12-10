import { flights } from "../../../utils/data";
import FlightItem from "../../molecules/FlightItem/FlightItem";
import { Grid } from "./FlightItemsGrid.styled";

const FlightItemsGrid = () => {
  return (
    <Grid>
      {flights.slice(0, 3).map((item) => (
        <FlightItem key={item.id} {...item} isFavorite />
      ))}
    </Grid>
  );
};

export default FlightItemsGrid;
