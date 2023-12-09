import { Button } from "./ClearAll.styled";

interface ClearAllProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ClearAll: React.FC<ClearAllProps> = ({ text, ...rest }) => {
  return <Button {...rest}>{text}</Button>;
};

export default ClearAll;
