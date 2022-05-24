import { Link } from "react-router-dom";
import styled from "styled-components";

import imgSrc from "../../assets/images/purple-brandmark-600x164.png";

const LogoImg = styled.img`
  width: 8rem;
  height: auto;
  object-fit: initial;
  padding: 0.25rem;
`;

const Logo = () => {
  return (
    <Link to="/admin">
      <LogoImg src={imgSrc} alt="Page logo" />
    </Link>
  );
};

export default Logo;
