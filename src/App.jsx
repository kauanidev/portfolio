import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { darkTheme } from "./styles/theme";
import store from "./store";
import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { StyledToaster } from "./components/StyledToaster";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Router />
            <StyledToaster />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
