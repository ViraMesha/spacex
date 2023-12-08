import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: var(--bg-light-blue);
  min-width: 163px;
  cursor: pointer;

  color: var(--text-black);
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  transition: background-color var(--transition), color var(--transition);

  &:hover {
    background-color: var(--bg-light-blue-hover);
    color: var(--text-white);
  }
`;
