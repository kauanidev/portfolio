import { SectionButton, SectionSelectorContainer } from "./styles";
import { setCurrentSection } from "../../store/slices/home";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export function SectionSelector() {
  const currentSection = useAppSelector((state) => state.home.currentSection);
  const dispatch = useAppDispatch();

  function handleSelectSection(section: "portfólio" | "skills") {
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
