import IconButton from "../Buttons/IconButton/IconButton";
import { List } from "./SliderPagination.styled";
import { ArrowRight } from "../Icons";

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
      <IconButton icon={<ArrowRight />} onClick={handlePrevClick} />
      <IconButton icon={<ArrowRight />} onClick={handleNextClick} />
    </List>
  );
};

export default SliderPagination;
