import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import store from "./store";
import { client } from "./lib/apollo";
import { ApolloProvider } from "@apollo/client";
import { StyledToaster } from "./components/StyledToaster";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
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
