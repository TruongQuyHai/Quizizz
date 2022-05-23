import styled from "styled-components";

const InputStyle = styled.input`
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor || "#000000"};
  }
  border: none;
  outline: none;
`;

const Input = ({ placeholder, className, ...props }) => {
  return (
    <InputStyle
      // placeholder black
      className={className}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
