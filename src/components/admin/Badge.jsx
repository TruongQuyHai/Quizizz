import styled from "styled-components";

const BadgeStyle = styled.span`
  font-size: 0.625rem;
  line-height: 1rem;
  letter-spacing: 0.015em;
  color: #424242;
  background-color: rgba(9, 9, 9, 0.05);
  font-weight: 600;
`;

const Badge = () => {
  return (
    <div className="mb-1">
      <BadgeStyle>Basic account</BadgeStyle>
    </div>
  );
};

export default Badge;
