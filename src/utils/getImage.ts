import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import slide3 from "../assets/slide-3.jpg";

export const getImage = (index: number) => {
  const images = [slide1, slide2, slide3];

  if (index < 3) return images[index];

  return images[1];
};
