import { Button } from "./ActionButton.styled";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLink?: boolean;
  children: React.ReactNode;
  href?: string;
}

const ActionButton = ({
  isLink,
  children,
  href = "#",
  ...rest
}: ActionButtonProps) => {
  return (
    <>
      {isLink ? (
        <Button as="a" href={href}>
          {children}
        </Button>
      ) : (
        <Button {...rest}>{children}</Button>
      )}
    </>
  );
};

export default ActionButton;
