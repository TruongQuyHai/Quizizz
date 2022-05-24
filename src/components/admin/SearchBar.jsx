import styled from "styled-components";
import Icon from "./Icon";
import Input from "./Input";

const SearchBarStyle = styled.div`
  border-radius: 0.5rem;
  background: rgba(242, 242, 242, 1);
`;

const SearchBar = ({
  style,
  className,
  placeholder,
  rightSection,
  divider = true,
}) => {
  return (
    <SearchBarStyle
      className={`d-flex p-relative w-100% pl-2.25 pr-0.5 py-0.5 h-2.5${
        className ? " " + className : ""
      }`}
      style={style}
    >
      {/* Search Icon & Input */}
      <div style={{ width: "100%" }} className="center-item">
        <Icon
          style={{
            width: 24,
            height: 24,
            left: "0.5em",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          className="fas fa-search p-absolute center-item pt-0.125"
          fs="12px"
        />

        <Input
          placeholder={placeholder}
          style={{
            borderRadius: "inherit",
            background: "inherit",
            paddingRight: "0.5em",
          }}
          className="w-100% font-semibold text-sm"
        />
      </div>

      {/* Divider */}
      {divider && (
        <div
          style={{
            borderLeft: "1px solid rgba(182,182,182,1)",
            height: "100%",
          }}
        />
      )}

      {/* Right section */}
      {rightSection}
    </SearchBarStyle>
  );
};

export default SearchBar;
