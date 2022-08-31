import { ProjectsContainer } from "./styles";
import { Projects as ProjectsList } from "../../components/Projects";
import { useQuery, gql } from "@apollo/client";
import { Button } from "../../components/Button";
import { BsArrowBarLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading";

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

export function Projects() {
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_PROJECTS);

  if (loading) return <Loading />;

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <ProjectsContainer>
      <div>
        <Button onClick={handleGoBack}>
          <BsArrowBarLeft />
        </Button>
        <h1>Projetos</h1>
      </div>
      <ProjectsList projects={data.projects} />
    </ProjectsContainer>
  );
}
