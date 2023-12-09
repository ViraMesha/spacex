import { Container, Image, Section, Heading } from "./FavHero.styled";
import img from "../../../assets/fav-banner.jpg";

const FavHero = () => {
  return (
    <Section>
      <Container>
        <Image src={img} alt="Hero Background" />
        <Heading>favourites</Heading>
      </Container>
    </Section>
  );
};

export default FavHero;
