import { Button } from "./ClearAllBtn.styled";

interface ClearAllProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  shouldBeShown?: boolean;
}

const ClearAllBtn: React.FC<ClearAllProps> = ({
  text,
  shouldBeShown = true,
  ...rest
}) => {
  return (
    <Button $shouldbeshown={shouldBeShown} {...rest}>
      {text}
    </Button>
  );
};

export default ClearAllBtn;
