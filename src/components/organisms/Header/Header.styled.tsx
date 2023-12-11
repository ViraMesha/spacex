import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 1440px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-height: 5rem;
  padding: 0.87rem;
  background-color: var(--bg-black-opacity);
  z-index: 10;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ActionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
