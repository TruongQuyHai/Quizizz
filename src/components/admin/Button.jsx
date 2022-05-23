import styled from "styled-components";
import {
  HorizontalPadding1rem,
  VerticalPadding375rem,
  VerticalPadding625rem,
} from "../utils";
import Icon from "./Icon";
import TextLg from "./TextLg";

const _BaseStyle = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-weight: 600;
  border: none;
`;

const ButtonIconRight = styled(_BaseStyle)`
  border-radius: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0;
`;

const ButtonIconLeftRight = styled(_BaseStyle)`
  border-radius: 0.5rem;
  box-shadow: 0 4px 0 0 #6c4298;
  width: 10.5rem;
  border-radius: 0.5rem;
`;

export const ButtonRounded = () => {
  return (
    <ButtonIconRight
      style={{
        background: "rgba(255, 164, 2, 0.2)",
        color: "rgba(206, 132, 0, 1)",
      }}
      className="py-0.375 px-1 mb-1"
    >
      <span>Upgrade to super</span>
      <Icon className="fas fa-bolt ml-0.5" fs="11px" />
    </ButtonIconRight>
  );
};

export const ButtonBoxShadow = () => {
  return (
    <ButtonIconLeftRight
      style={{
        background: "rgba(136,84,192,1)",
        color: "#FFFFFF",
      }}
      className="py-0.625 px-1 mb-1.75"
    >
      <Icon className="fas fa-plus-circle mr-0.5" fs="16px" />
      <TextLg>Create</TextLg>
      <Icon className="fas fa-caret-down ml-auto" fs="16px" />
    </ButtonIconLeftRight>
  );
};
