import styled, { css } from "styled-components";

export const List = styled.ul<{ active: boolean }>`
  width: 24px;
  height: 24px;

  & > li {
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--bg-white);
  }

  ${({ active }) =>
    active &&
    css`
      & > li::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% -50%);
        border-radius: 50%;
        background-color: var(--bg-white);
        width: 12px;
        height: 12px;
      }
    `}
`;
