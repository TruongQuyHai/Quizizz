import { Link } from "react-router-dom";
import styled from "styled-components";

const NamedComponent = styled(Link)`
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: -0.01em;
  color: #000000;
  font-weight: 600;
`;

const Name = () => {
  return (
    <NamedComponent className="font-semibold" to="/admin">
      Hải Quý
    </NamedComponent>
  );
};

export default Name;
