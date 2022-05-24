import styled from "styled-components";

const BadgeStyle = styled.div`
  background-color: rgba(9, 9, 9, 0.05);
  display: inline-block;
`;

const Badge = ({ type, style, className = "px-0.375" }) => {
  return (
    <BadgeStyle
      style={style}
      className={"font-semibold text-tn text-dark px-0.375 " + className}
    >
      {type}
    </BadgeStyle>
  );
};

export default Badge;
