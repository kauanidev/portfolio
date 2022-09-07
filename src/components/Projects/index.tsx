import { IProject } from "../../interfaces/projects.interface";
import { ProjectItem } from "../ProjectItem";
import { ProjectsContainer } from "./styles";

interface ProjectsProps {
  projects: IProject[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      {projects.map((item) => {
        return <ProjectItem key={item.slug} project={item} />;
      })}
    </ProjectsContainer>
  );
}
