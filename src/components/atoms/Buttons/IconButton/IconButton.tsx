import icons from "../../../../assets/sprite.svg";
import { Button, Link } from "./IconButton.styled";

interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  href?: string;
  icon: string;
}

const IconButton = ({ isLink, href = "#", icon, ...rest }: IconButton) => {
  return (
    <>
      {isLink ? (
        <Link to={href}>
          <svg width={24} height={24}>
            <use href={icons + `#${icon}`} />
          </svg>
        </Link>
      ) : (
        <Button {...rest}>
          <svg width={24} height={24}>
            <use href={icons + `#${icon}`} />
          </svg>
        </Button>
      )}
    </>
  );
};

export default IconButton;
