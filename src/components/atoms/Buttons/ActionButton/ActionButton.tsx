import { Button } from "./ActionButton.styled";

type ActionButtonProps = {
  isLink?: boolean;
  children: React.ReactNode;
  href?: string;
};

const ActionButton = ({ isLink, children, href = "#" }: ActionButtonProps) => {
  return (
    <>
      {isLink ? (
        <Button as="a" href={href}>
          {children}
        </Button>
      ) : (
        <Button>{children}</Button>
      )}
    </>
  );
};

export default ActionButton;
