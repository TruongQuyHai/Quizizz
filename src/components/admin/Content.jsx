import styled from "styled-components";

const ContentStyle = styled.main`
  background: rgba(242, 242, 242, 1);
  flex-grow: 1;
`;

const Content = () => {
  return (
    <ContentStyle>
      <h1>What will you teach today?</h1>
    </ContentStyle>
  );
};

export default Content;
