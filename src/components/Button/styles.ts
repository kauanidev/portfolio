import { lighten } from "polished";
import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant: "coral" | "gray";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 1.25rem 3.125rem;
  border-radius: 0.625rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 1.25rem;
  font-weight: 500;
  justify-content: center;
  transition: 0.4s;

  ${(props) =>
    props.variant === "coral" &&
    css`
      background: ${props.theme.primary};
      color: ${props.theme.bg};
      &:hover {
        background: ${lighten(0.06, props.theme.primary)};
      }
    `}
  ${(props) =>
    props.variant === "gray" &&
    css`
      background: ${props.theme.shape[400]};
      color: ${props.theme.text};
      &:hover {
        background: ${lighten(0.06, props.theme.shape[400])};
      }
    `};
`;
