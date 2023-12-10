import { useRef } from "react";
import { useQuery } from "@apollo/client";
import SlickSlider from "react-slick";
import { v4 as uuidv4 } from "uuid";

import Slider from "../../atoms/Slider/Slider";
import SliderPagination from "../../atoms/SliderPagination/SliderPagination";
import Container from "../../atoms/Container/Container";
import FlightItem from "../../molecules/FlightItem/FlightItem";

import { Heading, Title, Section, Grid } from "./Tours.styled";

import { ALL_ROCKETS } from "../../../apollo/rockets";
import { getImage } from "../../../utils/getImage";
import type { TRocket } from "../../../types";
import { useSetRecoilState } from "recoil";
import { favoriteListState } from "../../../state/atoms";

const Tours = () => {
  const sliderRef = useRef<SlickSlider | null>(null);
  const { loading, error, data } = useQuery(ALL_ROCKETS);
  const setFavoriteList = useSetRecoilState(favoriteListState);

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

  const addToFavorites = (data: TRocket) => {
    setFavoriteList((prevItems) => [...prevItems, data]);
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
                  img={getImage(index)}
                  {...item}
                  id={uuidv4()}
                  addToFavorites={addToFavorites}
                />
              ))}
          </Slider>
        </Grid>
      </Container>
    </Section>
  );
};

export default Tours;
