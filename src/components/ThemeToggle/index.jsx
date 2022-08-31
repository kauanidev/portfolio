import { ThemeToggleContainer } from "./styles";
import { MdWbSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slices/preferences";

export function ThemeToggle() {
  const currentTheme = useSelector((state) => state.preferences.currentTheme);
  const dispatch = useDispatch();

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }
  return (
    <ThemeToggleContainer onClick={handleToggleTheme}>
      {currentTheme === "dark" ? <MdWbSunny /> : <RiMoonClearFill />}
    </ThemeToggleContainer>
  );
}
