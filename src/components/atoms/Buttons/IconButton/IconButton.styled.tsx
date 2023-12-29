import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonStyles = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.91rem;
  background-color: var(--bg-gray);
  cursor: pointer;
  transition: background-color var(--transition);

  & svg {
    transition: fill var(--transition);
  }

  &:hover {
    background-color: var(--bg-pink);
  }

  &:hover path {
    fill: white;
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;

export const Link = styled(NavLink)`
  ${ButtonStyles}

  &.active {
    background-color: var(--bg-pink);
  }

  &.active path {
    fill: white;
  }
`;
