import styled from "styled-components";
import ContentSearchBar from "./ContentSearchBar";
import Quizzes from "./Quizzes";
import SuggestedTopics from "./SuggestedTopics";

const ContentStyle = styled.main`
  background: rgba(242, 242, 242, 1);
  flex-grow: 1;
`;

const Content = () => {
  return (
    <ContentStyle className="d-flex flex-column align-center pb-1 pt-1.5 px-1">
      <h1 className="mt-6 mb-2 text-xxl">What will you teach today?</h1>
      <ContentSearchBar />
      <SuggestedTopics />
      <div className="w-100%">
        <Quizzes />
      </div>
    </ContentStyle>
  );
};

export default Content;
