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

ul {
  list-style: none;
}
`;

export const BaseContainer = styled.main`
  width: 100%;
  max-width: 47.5rem;
  margin: 0 auto;
`;
