import styled from "styled-components";

export const Section = styled.section`
  padding: 96px 0;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 43px;
`;

export const Title = styled.h2`
  color: var(--text-light-black);
  text-align: left;
  font-size: 32px;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  & .slick-dots {
    bottom: -60px;
  }

  & .slick-dots > li {
    border-color: var(--text-light-black);
  }

  & .slick-dots li.slick-active button:before {
    color: var(--text-light-black);
  }
`;
