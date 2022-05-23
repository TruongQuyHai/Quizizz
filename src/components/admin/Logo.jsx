import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 8rem;
  padding: 0.25rem;
`;

const Logo = () => {
  return (
    <Link to="/admin">
      <LogoImg
        src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
        alt="Page logo"
      />
    </Link>
  );
};

export default Logo;
