import styled from "styled-components";
import { Wrapper } from "../../atoms/Container/Container.styled";

export const StyledHeader = styled.header`
  min-height: 5rem;
  padding: 0.87rem;
  background-color: var(--bg-black-opacity);
`;

export const Container = styled.div`
  ${Wrapper};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;
