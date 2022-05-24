import styled from "styled-components";
import Icon from "./Icon";

const SearchBarStyle = styled.div`
  border-radius: 0.5rem;
  background: rgba(242, 242, 242, 1);
`;

// TODO: refactor Search bar
const SearchBar = ({
  input,
  style,
  className,
  searchIconStyle,
  searchIconClassName,
  rightSection,
  fs = "12px",
  divider = true,
}) => {
  return (
    <SearchBarStyle className={className} style={style}>
      {/* Search Icon & Input */}
      <div style={{ width: "100%" }} className="center-item">
        <Icon
          style={{
            left: "0.5em",
            top: "50%",
            transform: "translateY(-50%)",

            ...searchIconStyle,
          }}
          className={`fas fa-search p-absolute center-item pt-0.125${
            searchIconClassName ? " " + searchIconClassName : ""
          }`}
          fs={fs}
        />

        {input}
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
