import styled from "styled-components";
import Topic from "./Topic";
import {
  btsSrc,
  mathSrc,
  englishSrc,
  socialStudySrc,
  languageSrc,
  scienceSrc,
  computerSrc,
  careerSrc,
  creativeArtSrc,
  healthSrc,
} from "../../assets";

const topics = [
  { src: btsSrc, title: "BTS" },
  { src: mathSrc, title: "Math" },
  { src: englishSrc, title: "English" },
  { src: socialStudySrc, title: "Social Studies" },
  { src: languageSrc, title: "Languages" },
  { src: scienceSrc, title: "Science" },
  { src: computerSrc, title: "Computers" },
  { src: careerSrc, title: "Career Ed" },
  { src: creativeArtSrc, title: "Creative Arts" },
  { src: healthSrc, title: "Health & PE" },
];

const TopicContainer = styled.div`
  > * {
    margin-left: 2rem;
  }
`;

const SuggestedTopics = () => {
  return (
    <TopicContainer className="mt-4 d-flex pb-1">
      {topics.map(({ src, title }) => (
        <Topic key={title} src={src} title={title} />
      ))}
    </TopicContainer>
  );
};

export default SuggestedTopics;
