import { ProjectItem } from "../ProjectItem";
import { ProjectsContainer } from "./styles";

export function Projects({ projects }) {
  return (
    <ProjectsContainer>
      {projects.map((item) => {
        return <ProjectItem key={item.slug} project={item} />;
      })}
    </ProjectsContainer>
  );
}
