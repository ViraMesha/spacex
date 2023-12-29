import { Button, Link } from "./IconButton.styled";

interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  href?: string;
  icon: React.ReactNode;
  isInFavorites?: boolean;
}

const IconButton = ({ isLink, href = "#", icon, ...rest }: IconButton) => {
  return (
    <>
      {isLink ? (
        <Link to={href}>{icon}</Link>
      ) : (
        <Button {...rest}>{icon}</Button>
      )}
    </>
  );
};

export default IconButton;
