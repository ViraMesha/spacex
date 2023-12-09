import { Section, Body, Heading, SliderWrapper, Image } from "./Banner.styled";
import img1 from "../../../assets/banner-1.jpg";
import img2 from "../../../assets/banner-2.jpg";
import img3 from "../../../assets/banner-3.jpg";
import Slider from "../../atoms/Slider/Slider";

const bannerImages = [img1, img2, img3];

const Banner = () => {
  return (
    <Section>
      <Body>
        <Heading>
          The space is waiting for <span>you</span>
        </Heading>
        <SliderWrapper>
          <Slider dots>
            {bannerImages.map((img, i) => (
              <div key={i}>
                <Image src={img} alt="" />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Body>
    </Section>
  );
};

export default Banner;
