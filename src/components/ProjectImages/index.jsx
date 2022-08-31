import { ProjectImagesContainer, ProjectImagesItem } from "./styles";

export function ProjectImages({ sections }) {
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
