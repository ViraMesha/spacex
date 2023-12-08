import { Link } from "react-router-dom";
import logoImg from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="SpaceX's logo" />
    </Link>
  );
};

export default Logo;
