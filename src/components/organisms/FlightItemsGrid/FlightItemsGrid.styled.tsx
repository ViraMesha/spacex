import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;

  & svg {
    fill: none;
    stroke: var(--bg-black);
    transition: stroke var(--transition);
  }

  & button:last-child:hover svg {
    fill: none;
    stroke: var(--bg-white);
  }
`;
