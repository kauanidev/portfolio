import { SkillItem, SkillsContainer } from "./styles";
import { ITechnology } from "../../interfaces/projects.interface";

interface SkillsProps {
  skills: ITechnology[];
}

export function Skills({ skills }: SkillsProps) {
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
