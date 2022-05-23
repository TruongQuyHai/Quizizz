import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

const activeStyle = ({ $active }) =>
  $active
    ? css`
        color: #8854c0;
        box-shadow: inset -4px 0 0 0 #8854c0;
        background: rgba(242, 242, 242, 1);
        font-weight: 600;
      `
    : css`
        font-weight: 400;
      `;

const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  ${(props) => activeStyle(props)}
  font-size: 0.875rem;
  &:hover {
    background: rgba(242, 242, 242, 1);
  }
`;

const TabLink = ({ children, icon, ...props }) => {
  return (
    <LinkStyle className="h-2.75 text-dark-424242" {...props}>
      <span className="ml-1 mr-0.75">{icon}</span>
      <span>{children}</span>
    </LinkStyle>
  );
};

export default TabLink;
