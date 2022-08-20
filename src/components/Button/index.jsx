import { ButtonContainer } from "./styles";

export function Button({ variant = "gray", children }) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>;
}
