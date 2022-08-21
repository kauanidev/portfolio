import { SectionButton, SectionSelectorContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSection } from "../../store/slices/home";

export function SectionSelector() {
  const currentSection = useSelector((state) => state.home.currentSection);
  const dispatch = useDispatch();

  function handleSelectSection(section) {
    dispatch(setCurrentSection(section));
  }

  return (
    <SectionSelectorContainer>
      <SectionButton
        onClick={() => handleSelectSection("portfólio")}
        isActive={currentSection === "portfólio"}
      >
        Portfólio
      </SectionButton>
      <SectionButton
        onClick={() => handleSelectSection("skills")}
        isActive={currentSection === "skills"}
      >
        Skills
      </SectionButton>
    </SectionSelectorContainer>
  );
}
