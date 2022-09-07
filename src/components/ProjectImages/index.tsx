import { ISection } from "../../interfaces/projects.interface";
import { ProjectImagesContainer, ProjectImagesItem } from "./styles";

interface ProjectImagesProps {
  sections: ISection[];
}

export function ProjectImages({ sections }: ProjectImagesProps) {
  return (
    <ProjectImagesContainer>
      {sections.map((item) => {
        return (
          <ProjectImagesItem key={item.title}>
            <h2>{item.title}</h2>
            <img src={item.image.url} alt={item.title} />
          </ProjectImagesItem>
        );
      })}
    </ProjectImagesContainer>
  );
}
