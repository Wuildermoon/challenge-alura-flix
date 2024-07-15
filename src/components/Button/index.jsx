import StyledButton from "./Button.styles";

const Button = ({ color, shadow, weight, background, children }) => {
  return (
    <StyledButton
      color={color}
      shadow={shadow}
      weight={weight}
      background={background}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
