import styled from "styled-components";

export const Section = styled.section`
  height: 740px;
  position: relative;
  padding-top: 239px;
`;

export const Body = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  position: relative;
  z-index: 1;

  & > span {
    font-size: 310px;
  }
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & .slick-dots {
    z-index: 3;
    top: 65%;
    left: 46%;
    transform: translate(-50%, -50%);
  }
`;

export const Image = styled.img`
  height: 740px;
  width: 100%;
  object-fit: cover;
  opacity: 0.48;
  z-index: -1;
`;
