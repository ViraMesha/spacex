import { List } from "./SliderControls.styled";

type SliderControlsProps = {
  isActive?: boolean;
};

const SliderControls = ({ isActive }: SliderControlsProps) => {
  const pageRange = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <List active={isActive}>
      <li></li>
      <li></li>
      <li></li>
    </List>
  );
};

export default SliderControls;
