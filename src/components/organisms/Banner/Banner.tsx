import Slider from "../../atoms/Slider/Slider";
import { bannerImages } from "../../../utils/data";
import { ArrowDown } from "../../atoms/Icons";
import {
  Section,
  Body,
  Content,
  Heading,
  SliderWrapper,
  Image,
  Link,
  LinkWrapper,
} from "./Banner.styled";

const Banner = () => {
  return (
    <Section>
      <Body>
        <Content>
          <Heading>
            The space is waiting for <span>you</span>
          </Heading>
          <LinkWrapper>
            <Link href="#tours">Explore tours</Link>
            <ArrowDown />
          </LinkWrapper>
        </Content>
        <SliderWrapper>
          <Slider dots autoplay infinite>
            {bannerImages.map((img, i) => (
              <div key={i}>
                <Image src={img} alt="Hero Background" />
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </Body>
    </Section>
  );
};

export default Banner;
