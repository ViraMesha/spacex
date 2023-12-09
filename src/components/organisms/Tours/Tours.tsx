import Container from "../../atoms/Container/Container";
import SliderPagination from "../../atoms/SliderPagination/SliderPagination";
import { Heading, Title, Section } from "./Tours.styled";

const Tours = () => {
  return (
    <Section id="tours">
      <Container>
        <Heading>
          <Title>popular tours</Title>
          <SliderPagination />
        </Heading>
      </Container>
    </Section>
  );
};

export default Tours;
