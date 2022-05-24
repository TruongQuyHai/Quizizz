import styled from "styled-components";

const TopicStyle = styled.div`
  transform-origin: center;
  &:hover {
    transform: scale(1.1);
  }
`;

const Topic = ({ src, title }) => {
  return (
    <TopicStyle className="d-flex flex-column align-center c-pointer duration-300">
      <img className="w-4" src={src} alt={title} />
      <span className="font-medium text-dark">{title}</span>
    </TopicStyle>
  );
};

export default Topic;
