import styled from "styled-components";
import Badge from "./Badge";

const QuizzStyle = styled.div`
  background: #ffffff;
  border-radius: 0.75rem;
  max-width: 15rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 0 0px #ffffff, 0 0 0 1px, rgba(9, 9, 9, 0.1);
  &:hover {
    box-shadow: 0 0 transparent, 0 0 transparent,
      0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const Quizz = ({ src, types, title, numOfQuestions, playedNumber }) => {
  return (
    <QuizzStyle className="m-0.5">
      <div className="h-10">
        <img src={src} alt={title} />
      </div>

      <div className="p-0.625 pb-0.875 h-7.5">
        {types.map((type) => (
          <Badge className="rounded-full" key={type} type={type} />
        ))}

        <div className="mt-0.5 mb-1 font-semibold">{title}</div>

        <div className="text-xs mt-auto text-dark-2 font-semibold">
          <span className="mr-0.375">{numOfQuestions} Questions</span>
          <span>•</span>
          <span className="ml-0.375">{playedNumber}K plays</span>
        </div>
      </div>
    </QuizzStyle>
  );
};

export default Quizz;
