import styled from "styled-components";
import { ButtonIcon } from "./Button";
import Icon from "./Icon";
import Input from "./Input";

const SearchBarStyle = styled.div`
  border-radius: 0.5rem;
  background: rgba(242, 242, 242, 1);
  display: flex;
`;

const SearchBar = () => {
  return (
    <SearchBarStyle className="p-relative w-100% pl-2.25 pr-0.5 py-0.5 h-2.5">
      <div style={{ width: "100%" }} className="center-item">
        <Icon
          style={{
            width: 24,
            height: 24,
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          className="fas fa-search p-absolute center-item pt-0.125"
          fs="12px"
        />
        <Input
          placeholder="Search"
          style={{ borderRadius: "inherit", background: "inherit" }}
          className="w-100% font-semibold text-sm"
        />
      </div>
      <div
        style={{
          borderLeft: "1px solid rgba(182,182,182,1)",
          height: "100%",
        }}
      />
      <div
        style={{
          borderRadius: "inherit",
          flexShrink: 0,
        }}
        className="border-radius-inherit h-100% d-flex align-center pl-0.5 pr-0.25 py-0.5"
      >
        <ButtonIcon
          className="h-100% font-semibold text-sm"
          iconRight={
            <Icon className="fas fa-caret-down w-1.5 text-center" fs="12px" />
          }
        >
          Quizziz library
        </ButtonIcon>
      </div>
    </SearchBarStyle>
  );
};

export default SearchBar;
