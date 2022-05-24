import styled from "styled-components";

const BaseStyleButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-weight: 600;
  border: none;
`;

const RoundedButton = styled(BaseStyleButton)`
  border-radius: 50%;
  justify-content: center;
`;

export const ButtonIcon = ({
  children,
  iconLeft,
  iconRight,
  iconOnly,
  icon,
  buttonStyle,
  ...props
}) => {
  if (iconOnly) return <RoundedButton {...props}>{icon}</RoundedButton>;

  const Component = buttonStyle || BaseStyleButton;
  return (
    <div>
      <Component {...props}>
        {iconLeft}
        {children}
        {iconRight}
      </Component>
    </div>
  );
};

const ButtonIconBoxShadowStyle = styled(BaseStyleButton)`
  border-radius: 0.5rem;
  box-shadow: 0 4px 0 0 #6c4298;
  width: 10.5rem;
  border-radius: 0.5rem;
`;

export const ButtonIconBoxShadow = ({
  style,
  className,
  content,
  iconLeft,
  iconRight,
}) => {
  return (
    <ButtonIcon
      style={style}
      className={className}
      iconLeft={iconLeft}
      iconRight={iconRight}
      buttonStyle={ButtonIconBoxShadowStyle}
    >
      <span>{content}</span>
    </ButtonIcon>
  );
};

const ButtonIconPillSmallStyle = styled(BaseStyleButton)`
  border-radius: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0;
`;

export const ButtonIconPillSmall = ({
  style,
  className,
  content,
  iconLeft,
  iconRight,
}) => {
  return (
    <ButtonIcon
      style={style}
      className={className}
      iconLeft={iconLeft}
      iconRight={iconRight}
      buttonStyle={ButtonIconPillSmallStyle}
    >
      <span>{content}</span>
    </ButtonIcon>
  );
};

export const ButtonText = ({ children, ...props }) => {
  return <BaseStyleButton {...props}>{children}</BaseStyleButton>;
};

export const ButtonTextPrimary = styled(ButtonText)`
  background-color: rgba(237, 230, 246, 1);
  color: rgba(136, 84, 192, 1);
  &:hover {
    color: rgba(160, 118, 204, 1);
  }
`;
