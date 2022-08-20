import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
}
`;

export const BaseContainer = styled.main`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
`;