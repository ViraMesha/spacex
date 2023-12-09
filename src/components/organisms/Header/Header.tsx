import ActionButton from "../../atoms/Buttons/ActionButton/ActionButton";
import IconButton from "../../atoms/Buttons/IconButton/IconButton";
import Logo from "../../atoms/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import Container from "../../atoms/Container/Container";
import { StyledHeader, ActionsList } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Navigation />
        <ActionsList>
          <li>
            <IconButton isLink icon="heart" href="/favorites" />
          </li>
          <li>
            <ActionButton isLink>sign in</ActionButton>
          </li>
        </ActionsList>
      </Container>
    </StyledHeader>
  );
};

export default Header;
