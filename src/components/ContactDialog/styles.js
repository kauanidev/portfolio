import * as Dialog from "@radix-ui/react-dialog";
import { rgba, darken } from "polished";
import styled from "styled-components";
import { Button } from "../Button";

export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: ${(props) => rgba(darken(0.1, props.theme.shape[600]), 0.8)};
  backdrop-filter: blur(3px);
`;

export const StyledContent = styled(Dialog.Content)`
  background: ${(props) => props.theme.shape[400]};
  padding: 2.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 40rem;
  border-radius: 1.25rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 40px;

    textarea {
      resize: vertical;
    }
  }

  h2 {
    font-size: 1.5625rem;
    color: ${(props) => props.theme.title};
  }
`;

export const StyledClose = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;
  right: 1rem;
  top: 1rem;

  svg {
    font-size: 1.25rem;
    color: ${(props) => props.theme.primary};
  }
`;

export const Input = styled.input`
  border: 3px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.theme.shape[600]};
  color: ${(props) => props.theme.title};

  &:focus {
    border-color: ${(props) => props.theme.secondary};
    outline: none;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 10px;

  &:hover {
    background: ${(props) => props.theme.secondary};
  }
`;
