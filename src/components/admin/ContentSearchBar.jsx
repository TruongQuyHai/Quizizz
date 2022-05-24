import Icon from "./Icon";
import Input from "./Input";
import SearchBar from "./SearchBar";

const ContentSearchBar = () => {
  return (
    <SearchBar
      style={{ backgroundColor: "#FFFFFF", borderRadius: "2rem" }}
      className="shadow-soft-low text-xl py-0.75 px-1.5 d-flex p-relative w-75%"
      divider={false}
      searchIconStyle={{ left: 20 }}
      searchIconClassName="w-1.5"
      fs="20px"
      input={
        <Input
          placeholder="Search for quizzes on any topic"
          placeholderColor="rgba(182,182,182,1)"
          style={{
            paddingRight: "0.5em",
          }}
          className="w-100% font-semibold text-xl pl-2.25 pr-2.5 h-2.5 py-0.5"
        />
      }
      rightSection={
        <Icon
          className="fas fa-chevron-right center-item c-pointer"
          fs="20px"
        />
      }
    />
  );
};

export default ContentSearchBar;
