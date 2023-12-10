import { Button } from "./ClearAllBtn.styled";

interface ClearAllProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ClearAllBtn: React.FC<ClearAllProps> = ({ text, ...rest }) => {
  return <Button {...rest}>{text}</Button>;
};

export default ClearAllBtn;
