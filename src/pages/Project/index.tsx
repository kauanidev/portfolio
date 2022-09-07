import { ProjectHeader } from "../../components/ProjectHeader";
import { ProjectImages } from "../../components/ProjectImages";
import { ProjectBanner, ProjectContainer } from "./styles";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { IProject } from "../../interfaces/projects.interface";

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

interface GetProjectDataResponse {
  project: IProject;
}

export function Project() {
  const { slug } = useParams();
  const { data, loading } = useQuery<GetProjectDataResponse>(GET_PROJECT_DATA, {
    variables: { slug },
  });

  if (loading || !data) return <Loading />;

  return (
    <ProjectContainer>
      <ProjectBanner src={data.project.thumbnail.url} />
      <ProjectHeader project={data.project} />
      <ProjectImages sections={data.project.sections} />
    </ProjectContainer>
  );
}
