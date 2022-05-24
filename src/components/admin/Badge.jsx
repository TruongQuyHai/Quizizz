import styled from "styled-components";

const BadgeStyle = styled.span`
  background-color: rgba(9, 9, 9, 0.05);
`;

const Badge = ({ type }) => {
  return (
    <div className="mb-1 font-semibold text-tn text-dark">
      <BadgeStyle>{type}</BadgeStyle>
    </div>
  );
};

export default Badge;
