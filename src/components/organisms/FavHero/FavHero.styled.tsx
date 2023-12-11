import styled from "styled-components";

export const Section = styled.section`
  max-width: 1660px;
  margin: 0 auto;
  position: relative;
  padding-top: 220px;
  min-height: 440px;
  background-color: var(--bg-black);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1660px;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 440px;
  width: 100%;
  opacity: 0.64;
`;

export const Heading = styled.h1`
  position: relative;
  color: var(--text-white);
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  z-index: 1;
`;
