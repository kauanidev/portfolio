import { lighten } from "polished";
import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1.25rem 3.125rem;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
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
