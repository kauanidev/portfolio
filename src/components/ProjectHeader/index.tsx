import { Button } from "../Button";
import { ProjectHeaderContainer } from "./styles";
import { BsArrowBarLeft, BsLink45Deg } from "react-icons/bs";
import { FaGithub, FaCalendarDay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IProject } from "../../interfaces/projects.interface";

interface ProjectHeaderProps {
  project: IProject;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const technologies = project.technologies.map((item) => item.name).join(", ");
  const repo = project.repo.replace("https://github.com/kauanidev/", "");
  const formattedDate = new Date(project.creationDate).toLocaleDateString(
    "pt-BR"
  );

  return (
    <ProjectHeaderContainer>
      <header>
        <Button onClick={handleGoBack}>
          <BsArrowBarLeft />
          Voltar
        </Button>
        <Button
          target="_blank"
          as="a"
          href={project.projectLink}
          variant="coral"
        >
          Projeto Online <BsLink45Deg />
        </Button>
      </header>
      <h1>{project.title}</h1>
      <p>
        <strong>Tecnologias utilizadas: </strong>
        {technologies}
      </p>
      <ul>
        <li>
          <a href={project.repo} target="_blank">
            <FaGithub />
            {repo}
          </a>
        </li>
        <li>
          <FaCalendarDay />
          {formattedDate}
        </li>
      </ul>
    </ProjectHeaderContainer>
  );
}
