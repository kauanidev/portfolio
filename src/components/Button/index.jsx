import { ButtonContainer } from "./styles";

export function Button({ variant = "gray", children, ...rest }) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  );
}
