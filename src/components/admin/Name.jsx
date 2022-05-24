import { Link } from "react-router-dom";
import styled from "styled-components";

const NameStyle = styled(Link)`
  color: #000000;
`;

const Name = ({ name }) => {
  return (
    <NameStyle className="font-semibold text-sm" to="/admin">
      {name}
    </NameStyle>
  );
};

export default Name;
