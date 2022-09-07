import { ThemeToggleContainer } from "./styles";
import { MdWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { toggleTheme } from "../../store/slices/preferences";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export function ThemeToggle() {
  const currentTheme = useAppSelector(
    (state) => state.preferences.currentTheme
  );
  const dispatch = useAppDispatch();

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <ThemeToggleContainer onClick={handleToggleTheme}>
      {currentTheme === "dark" ? <MdWbSunny /> : <RiMoonClearFill />}
    </ThemeToggleContainer>
  );
}
