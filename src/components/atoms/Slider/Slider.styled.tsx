import SlickSlider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(SlickSlider)`
  & .slick-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  & .slick-dots > li {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    border: 2px solid var(--bg-white);
  }

  .slick-dots li button:before {
    font-size: 12px;
    line-height: 12px;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-dots li.slick-active button:before {
    color: white;
    opacity: 1;
  }
`;
