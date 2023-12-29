import styled from "styled-components";

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & button:first-child {
    transform: rotate(180deg);
  }

  & path {
    fill: none;
    stroke: var(--stroke-black);
    transition: stroke var(--transition);
  }

  & button:hover path {
    fill: none;
    stroke: var(--bg-white);
  }
`;
