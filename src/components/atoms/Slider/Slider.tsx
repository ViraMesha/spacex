// Import necessary modules and components
import { forwardRef } from "react";
import SlickSlider, { Settings } from "react-slick";

type SliderProps = {
  slidesToShow?: number;
  children?: React.ReactNode;
  infinite?: boolean;
  dots?: boolean;
  arrows?: boolean;
  slidesToScroll?: number;
  draggable?: boolean;
  swipe?: boolean;
  dotsStyles?: string;
  speed?: number;
  beforeChange?: (prev: number, next: number) => void;
  afterChange?: (index: number) => void;
  vertical?: boolean;
  verticalSwiping?: boolean;
  swipeToSlide?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
};

type ForwardedRefType = SlickSlider | null;

const Slider = forwardRef<ForwardedRefType, SliderProps>(
  (
    {
      children,
      slidesToShow = 1,
      infinite = false,
      dots = false,
      arrows = false,
      slidesToScroll = 1,
      draggable = true,
      swipe = true,
      dotsStyles,
      speed = 900,
      beforeChange,
      vertical = false,
      verticalSwiping = false,
      afterChange,
      swipeToSlide,
      autoplay = false,
      autoplaySpeed = 2000,
    },
    ref
  ) => {
    const sliderSettings: Settings = {
      slidesToShow,
      slidesToScroll,
      infinite,
      dots,
      arrows,
      draggable,
      swipe,
      vertical,
      verticalSwiping,
      swipeToSlide,
      autoplay,
      autoplaySpeed,
      appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
      dotsClass: `${dotsStyles || ""}`,
      customPaging: (i) => (
        <button type="button" aria-label={`Go to slide ${i + 1}`}></button>
      ),
    };
    return (
      <Slider
        {...sliderSettings}
        speed={speed}
        ref={ref}
        beforeChange={beforeChange}
        afterChange={afterChange}
      >
        {children}
      </Slider>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
