import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { darkTheme } from "./styles/theme";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
