import styled from "styled-components";

export const ThemeToggleContainer = styled.button`
  background: ${(props) => props.theme.shape[400]};
  border: none;
  color: ${(props) => props.theme.text};
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
