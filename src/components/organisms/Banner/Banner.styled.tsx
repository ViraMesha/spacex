import styled from "styled-components";
import arrow from "../../../assets/icons/arrow-down.svg";

export const Section = styled.section`
  min-height: 740px;
  position: relative;
  padding-top: 239px;
  background-color: var(--bg-black);
`;

export const Body = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`;

export const Content = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;

  & > span {
    font-size: 310px;
    display: inline-block;
    margin-top: -50px;
  }
`;

export const Link = styled.a`
  -webkit-text-stroke: 0.4px var(--text-black);
  -webkit-text-fill-color: var(--text-white);
  text-shadow: var(--text-shadow);
  font-family: Lato;
  font-size: 32px;
  font-weight: 300;
  line-height: normal;
  display: inline-block;
  padding-right: 20px;
  margin-top: 50px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 7px;
    right: -23px;
    width: 23px;
    height: 27px;
    background: url(${arrow}) no-repeat;
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
    top: 58%;
    left: 47%;
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
