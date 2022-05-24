import Slider from "react-slick/lib/slider";
import { tempSrc } from "../../assets";
import Quizz from "./Quizz";
import QuizzesHeader from "./QuizzesHeader";

const Quizzes = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4.9,
    slidesToScroll: 4,
    arrows: true,
  };
  return (
    <div className="p-2 pl-0 mt-4 mx-auto">
      <QuizzesHeader />

      <Slider {...settings}>
        <div>
          <Quizz
            src={tempSrc}
            types={["QUIZ"]}
            title="Daily Check-in"
            numOfQuestions={3}
            playedNumber={36.4}
          />
        </div>
        <div>
          <Quizz
            src={tempSrc}
            types={["QUIZ"]}
            title="Daily Check-in"
            numOfQuestions={3}
            playedNumber={36.4}
          />
        </div>
        <div>
          <Quizz
            src={tempSrc}
            types={["QUIZ"]}
            title="Daily Check-in"
            numOfQuestions={3}
            playedNumber={36.4}
          />
        </div>
        <div>
          <Quizz
            src={tempSrc}
            types={["QUIZ"]}
            title="Daily Check-in"
            numOfQuestions={3}
            playedNumber={36.4}
          />
        </div>
        <div>
          <Quizz
            src={tempSrc}
            types={["QUIZ"]}
            title="Daily Check-in"
            numOfQuestions={3}
            playedNumber={36.4}
          />
        </div>
        <div>
          <Quizz
            src={tempSrc}
            types={["QUIZ"]}
            title="Daily Check-in"
            numOfQuestions={3}
            playedNumber={36.4}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Quizzes;
