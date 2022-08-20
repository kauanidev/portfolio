import { SectionButton, SectionSelectorContainer } from "./styles";

export function SectionSelector() {
  return (
    <SectionSelectorContainer>
      <SectionButton isActive>Portfólio</SectionButton>
      <SectionButton>Skills</SectionButton>
    </SectionSelectorContainer>
  );
}
