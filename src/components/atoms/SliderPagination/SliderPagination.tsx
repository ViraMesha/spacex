import IconButton from "../Buttons/IconButton/IconButton";
import { List } from "./SliderPagination.styled";

type SliderPaginationProps = {
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

const SliderPagination = ({
  handlePrevClick,
  handleNextClick,
}: SliderPaginationProps) => {
  return (
    <List>
      <IconButton icon="arrow-right" onClick={handlePrevClick} />
      <IconButton icon="arrow-right" onClick={handleNextClick} />
    </List>
  );
};

export default SliderPagination;
