import { Link, StyledLink, LinkList } from "./Navigation.styled";

const Navigation = () => {
  return (
    <nav>
      <LinkList>
        <li>
          <StyledLink to="/">home</StyledLink>
        </li>
        <li>
          <Link href="#">tours</Link>
        </li>
        <li>
          <Link href="#">about</Link>
        </li>
        <li>
          <Link href="#">help</Link>
        </li>
      </LinkList>
    </nav>
  );
};

export default Navigation;
