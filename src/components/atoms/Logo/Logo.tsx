import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.svg";
import { Image } from "./Logo.styled.tsx";

const Logo = () => {
  return (
    <Link to="/">
      <Image src={logoImg} alt="SpaceX's logo" />
    </Link>
  );
};

export default Logo;
