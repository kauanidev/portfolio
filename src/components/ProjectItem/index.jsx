import { ProjectContent, ProjectItemContainer } from "./styles";

export function ProjectItem({ project }) {
  return (
    <ProjectItemContainer to={`/projects/${project.slug}`}>
      <img src={project.thumbnail.url} />
      <ProjectContent>
        <h3>{project.title}</h3>
        <ul>
          {project.tags.map((item) => {
            return <li key={item.slug}>{item.label}</li>;
          })}
        </ul>
      </ProjectContent>
    </ProjectItemContainer>
  );
}
