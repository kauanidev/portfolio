import { ThemeProvider as ThemeProviderBase } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { ReactNode } from "react";
import { useAppSelector } from "../../store/hooks";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const currentTheme = useAppSelector(
    (state) => state.preferences.currentTheme
  );
  return (
    <ThemeProviderBase theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProviderBase>
  );
}
