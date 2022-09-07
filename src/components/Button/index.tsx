import { ReactNode, ComponentProps } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ComponentProps<typeof ButtonContainer> & {
  variant?: "gray" | "coral";
  children: ReactNode;
};

export function Button({ variant = "gray", children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  );
}
