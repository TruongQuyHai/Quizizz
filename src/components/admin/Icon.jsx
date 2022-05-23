import styled from "styled-components";

const IconStyle = styled.i`
  font-size: ${({ fs }) => fs};
`;

const Icon = (props) => {
  return <IconStyle {...props}></IconStyle>;
};

export default Icon;
