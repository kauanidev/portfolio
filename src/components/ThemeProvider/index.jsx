import { ThemeProvider as ThemeProviderBase } from "styled-components";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../styles/theme";

export function ThemeProvider({ children }) {
  const currentTheme = useSelector((state) => state.preferences.currentTheme);
  return (
    <ThemeProviderBase theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProviderBase>
  );
}
