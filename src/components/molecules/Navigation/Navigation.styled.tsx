import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const LinkStyles = css`
  text-align: center;
  font-family: var(--secondary-font-family);
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  position: relative;
  padding: 30px 0;

  &:not(.active)::before {
    content: "";
    position: absolute;
    bottom: 1.52rem;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--bg-white);
    transform-origin: 100% 50%;
    transition: all var(--transition);
    transform: scaleX(0);
    transform: scaleY(1);
    transform: scaleZ(1);
    will-change: transform;
  }

  &:not(.active):hover::before {
    width: 100%;
    transform-origin: 100% 0;
    transform: scaleX(1);
    transform: scaleY(1);
    transform: scaleZ(1);
  }
`;

export const Link = styled.a`
  ${LinkStyles}
`;

export const StyledLink = styled(NavLink)`
  ${LinkStyles}

  &.active::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1.52rem;
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--bg-white);
  }
`;
