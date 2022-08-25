import { ProjectHeader } from "../../components/ProjectHeader";
import { ProjectImages } from "../../components/ProjectImages";
import { ProjectBanner, ProjectContainer } from "./styles";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_PROJECT_DATA = gql`
  query GetProjectData($slug: String) {
    project(where: { slug: $slug }) {
      title
      technologies {
        name
      }
      thumbnail {
        url
      }
      repo
      projectLink
      creationDate
      sections {
        image {
          url
        }
        title
      }
    }
  }
`;

export function Project() {
  const { slug } = useParams();
  const { data, loading } = useQuery(GET_PROJECT_DATA, {
    variables: { slug },
  });
  console.log(data);

  if (loading) return <p>CARREGANDO...</p>;

  return (
    <ProjectContainer>
      <ProjectBanner src={data.project.thumbnail.url} />
      <ProjectHeader project={data.project} />
      <ProjectImages sections={data.project.sections} />
    </ProjectContainer>
  );
}
