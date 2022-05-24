import styled from "styled-components";

const IconStyle = styled.i`
  font-size: ${({ fs }) => fs};
  color: ${({ color }) => color};
`;

const Icon = ({ fs, color, ...props }) => {
  return <IconStyle fs={fs} color={color} {...props}></IconStyle>;
};

export default Icon;
