const TextLg = ({ children, as }) => {
  const Component = as || "span";
  return (
    <Component
      style={{
        fontSize: "1.125rem",
        lineHeight: "1.5rem",
        letterSpacing: "-.015em",
      }}
    >
      {children}
    </Component>
  );
};

export default TextLg;
