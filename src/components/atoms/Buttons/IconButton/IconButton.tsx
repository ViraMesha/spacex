import icons from "../../../../assets/sprite.svg";
import { Button, Link } from "./IconButton.styled";

type IconButton = {
  isLink?: boolean;
  href?: string;
  icon: string;
};

const IconButton = ({ isLink, href = "#", icon }: IconButton) => {
  return (
    <>
      {isLink ? (
        <Link to={href}>
          <svg width={24} height={24}>
            <use href={icons + `#${icon}`} />
          </svg>
        </Link>
      ) : (
        <Button>
          <svg width={24} height={24}>
            <use href={icons + `#${icon}`} />
          </svg>
        </Button>
      )}
    </>
  );
};

export default IconButton;
