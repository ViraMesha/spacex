// Import necessary modules and components
import { forwardRef } from "react";
import SlickSlider, { Settings } from "react-slick";
import { StyledSlider } from "./Slider.styled";

// Define prop type for ReusableSlider component
type SliderProps = {
  slidesToShow?: number;
  children?: React.ReactNode;
  infinite?: boolean;
  dots?: boolean;
  arrows?: boolean;
  slidesToScroll?: number;
  draggable?: boolean;
  swipe?: boolean;
  speed?: number;
  beforeChange?: (prev: number, next: number) => void;
  afterChange?: (index: number) => void;
  vertical?: boolean;
  verticalSwiping?: boolean;
  swipeToSlide?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dotsColor?: "white" | "black";
};

// Define type for forwarded reference
type ForwardedRefType = SlickSlider | null;

// Create the ReusableSlider component
const Slider = forwardRef<ForwardedRefType, SliderProps>(
  (
    {
      children,
      slidesToShow = 1,
      infinite = false,
      dots = false,
      arrows = false,
      slidesToScroll = 1,
      draggable = false,
      swipe = false,
      speed = 500,
      beforeChange,
      vertical = false,
      verticalSwiping = false,
      afterChange,
      swipeToSlide,
      autoplay = false,
      autoplaySpeed = 10000,
      dotsColor = "white",
    },
    ref
  ) => {
    // Configure the settings for the Slider component
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
      dotsClass: `slick-dots ${dotsColor}`,
      customPaging: (i) => (
        <button type="button" aria-label={`Go to slide ${i + 1}`}></button>
      ),
    };
    return (
      <StyledSlider
        {...sliderSettings}
        speed={speed}
        ref={ref}
        beforeChange={beforeChange}
        afterChange={afterChange}
      >
        {children}
      </StyledSlider>
    );
  }
);

// Set display name for ReusableSlider component
Slider.displayName = "Slider";

export default Slider;
