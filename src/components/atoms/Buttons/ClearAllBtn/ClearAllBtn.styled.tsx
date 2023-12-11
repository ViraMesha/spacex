import styled from "styled-components";

export const Button = styled.button<{ $shouldbeshown: boolean }>`
  all: unset;
  color: var(--text-dark-blue);
  font-family: Lato;
  font-size: 24px;
  line-height: normal;
  cursor: pointer;
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.1);
  }
  display: ${({ $shouldbeshown }) =>
    $shouldbeshown ? "inline-block" : "none"};
`;
