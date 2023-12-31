import styled, { keyframes } from "styled-components";

const jumpInfinite = keyframes`
  0%
    {
        transform: translateY(-50%);
        opacity: 0.5;
    }
    50%
    {
        transform: translateY(20%);
        opacity: 1;
    }
    100%
    {
        transform: translateY(100%);
        opacity: 0;
    }
`;

export const Section = styled.section`
  max-width: 1660px;
  min-height: 740px;
  position: relative;
  padding-top: 239px;
  background-color: var(--bg-black);
  margin: 0 auto;
`;

export const Body = styled.div`
  margin: 0 auto;
  width: 100%;
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

export const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: center;

  & svg {
    animation: ${jumpInfinite} 2s infinite;
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
  margin-top: 50px;
  position: relative;
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
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
  max-width: 1660px;
  height: 740px;
  width: 100%;
  object-fit: cover;
  opacity: 0.48;
  z-index: -1;
`;
