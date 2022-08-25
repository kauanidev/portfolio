import { SkillItem, SkillsContainer } from "./styles";
import { SiJavascript } from "react-icons/si";

export function Skills({ skills }) {
  return (
    <SkillsContainer>
      {skills.map((item) => {
        return (
          <SkillItem key={item.name}>
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            <p>{item.name}</p>
          </SkillItem>
        );
      })}
    </SkillsContainer>
  );
}
