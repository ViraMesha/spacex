import styled from "styled-components";

export const Item = styled.div`
  text-align: center;
  font-size: 24px;
  line-height: normal;
  width: 411px;
  height: 572px;
  border: 1px solid var(--bg-light-blue);
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
`;

export const Content = styled.div`
  padding: 32px 32px 24px;
`;

export const Title = styled.h3`
  color: var(--text-light-black);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Text = styled.p`
  --max-lines: 2;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
  color: var(--text-dark-blue);
  text-align: center;
  font-family: Lato;
  line-height: normal;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 64px;

  & button:first-child {
    width: 278px;
  }
`;
