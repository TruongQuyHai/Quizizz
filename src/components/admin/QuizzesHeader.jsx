import { ButtonIcon } from "./Button";
import Icon from "./Icon";

const QuizzesHeader = () => {
  return (
    <div className="d-flex align-center">
      <Icon color="rgba(239,169,41,1)" className="fas fa-star" fs="20px" />
      <h2 className="ml-0.5">Ice-breakers and Bell Ringers</h2>

      <ButtonIcon
        style={{
          background: "rgba(237,230,246,1)",
          color: "rgba(136,84,192,1)",
          fontWeight: "500",
        }}
        className="rounded-full py-0.25 px-1 text-sm ml-auto"
        iconRight={<Icon className="fas fa-chevron-right ml-0.5" fs="12px" />}
      >
        <span>See more</span>
      </ButtonIcon>
    </div>
  );
};

export default QuizzesHeader;
