import { ProjectContent, ProjectItemContainer } from "./styles";

export function ProjectItem() {
  return (
    <ProjectItemContainer to="/projects/1">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80" />
      <ProjectContent>
        <h3>Portfólio KauaniDev</h3>
        <ul>
          <li>Website</li>
          <li>Id. Visual</li>
        </ul>
      </ProjectContent>
    </ProjectItemContainer>
  );
}
