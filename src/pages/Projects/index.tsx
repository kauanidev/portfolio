import { ProjectsContainer } from "./styles";
import { Projects as ProjectsList } from "../../components/Projects";
import { useQuery, gql } from "@apollo/client";
import { Button } from "../../components/Button";
import { BsArrowBarLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { IProject } from "../../interfaces/projects.interface";

const GET_PROJECTS = gql`
  query GetHomeData {
    projects(orderBy: creationDate_DESC, first: 100) {
      slug
      tags {
        label
        slug
      }
      title
      thumbnail {
        url
      }
    }
  }
`;

interface GetProjectsResponse {
  projects: IProject[];
}

export function Projects() {
  const navigate = useNavigate();
  const { data, loading } = useQuery<GetProjectsResponse>(GET_PROJECTS);

  if (loading || !data) return <Loading />;

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <ProjectsContainer>
      <header>
        <div>
          <Button onClick={handleGoBack}>
            <BsArrowBarLeft />
          </Button>
          <h1>Projetos</h1>
        </div>
        <p>{data.projects.length} projetos</p>
      </header>
      <ProjectsList projects={data.projects} />
    </ProjectsContainer>
  );
}
