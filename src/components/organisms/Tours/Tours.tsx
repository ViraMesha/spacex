import Container from "../../atoms/Container/Container";
import SliderPagination from "../../atoms/SliderPagination/SliderPagination";
import { Heading, Title, Section, Grid } from "./Tours.styled";
import SlickSlider from "react-slick";
import { useRef } from "react";
import Slider from "../../atoms/Slider/Slider";
import { flights } from "../../../utils/data";
import FlightItem from "../../molecules/FlightItem/FlightItem";

const Tours = () => {
  const sliderRef = useRef<SlickSlider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Section id="tours">
      <Container>
        <Heading>
          <Title>popular tours</Title>
          <SliderPagination
            handlePrevClick={handlePrevClick}
            handleNextClick={handleNextClick}
          />
        </Heading>
        <Grid>
          <Slider slidesToShow={3} slidesToScroll={1} dots ref={sliderRef}>
            {flights.map((item) => (
              <FlightItem key={item.id} {...item} />
            ))}
          </Slider>
        </Grid>
      </Container>
    </Section>
  );
};

export default Tours;
