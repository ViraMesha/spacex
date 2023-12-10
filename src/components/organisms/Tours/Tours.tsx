import Container from "../../atoms/Container/Container";
import SliderPagination from "../../atoms/SliderPagination/SliderPagination";
import { Heading, Title, Section, Grid } from "./Tours.styled";
import SlickSlider from "react-slick";
import { useRef } from "react";
import Slider from "../../atoms/Slider/Slider";
import FlightItem from "../../molecules/FlightItem/FlightItem";
import { useQuery } from "@apollo/client";
import { ALL_ROCKETS } from "../../../apollo/rockets";
import type { TRocket } from "../../../types";

import slide1 from "../../../assets/slide-1.jpg";
import slide2 from "../../../assets/slide-2.jpg";
import slide3 from "../../../assets/slide-3.jpg";

// const images = [slide1, slide2, slide3, slide1];

const Tours = () => {
  const sliderRef = useRef<SlickSlider | null>(null);
  const { loading, error, data } = useQuery(ALL_ROCKETS);
  // const [rockets, setRockets] = useState<TRocket[] | []>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

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

  const getDesignImage = (index: number) => {
    const designImages = [slide1, slide2, slide3];

    if (index < 3) return designImages[index];

    return designImages[0];
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
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            dots
            ref={sliderRef}
            infinite
          >
            {data?.rockets?.length > 0 &&
              data.rockets.map((item: TRocket, index: number) => (
                <FlightItem
                  key={item.id}
                  img={getDesignImage(index)}
                  {...item}
                />
              ))}
          </Slider>
        </Grid>
      </Container>
    </Section>
  );
};

export default Tours;
