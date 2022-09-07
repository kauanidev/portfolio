import "styled-components";
import { darkTheme } from "../styles/theme";

type ThemeType = typeof darkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
