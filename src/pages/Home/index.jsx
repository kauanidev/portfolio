import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer } from "./styles";
import { Button } from "../../components/Button";
import { HiDownload } from "react-icons/hi";
import { Projects } from "../../components/Projects";
import { SectionSelector } from "../../components/SectionSelector";
import { Skills } from "../../components/Skills";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Link } from "react-router-dom";
import { ContactDialog } from "../../components/ContactDialog";
import { Loading } from "../../components/Loading";
import { ThemeToggle } from "../../components/ThemeToggle";

const GET_HOME_DATA = gql`
  query GetHomeData {
    page(where: { slug: "home" }) {
      photo {
        url
      }
      resume {
        url
      }
      socials {
        icon
        name
        link
      }
      aboutMe {
        raw
      }
      technologies {
        icon
        name
      }
    }
    projects(orderBy: creationDate_DESC, first: 4) {
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

export function Home() {
  const currentSection = useSelector((state) => state.home.currentSection);

  const { data, loading } = useQuery(GET_HOME_DATA);

  if (loading) return <Loading />;

  return (
    <HomeContainer>
      <ThemeToggle />
      <Header data={data.page} />
      <RichText content={data.page.aboutMe.raw} />
      <ButtonsContainer>
        <Button
          target="_blank"
          download
          as="a"
          href={data.page.resume.url}
          variant="coral"
        >
          Download CV <HiDownload />
        </Button>
        <ContactDialog>
          <Button>Contato</Button>
        </ContactDialog>
      </ButtonsContainer>
      <SectionSelector />
      {currentSection === "portfólio" ? (
        <>
          <Projects projects={data.projects} />
          <Link to="/projects">
            <Button
              style={{
                width: "100%",
                marginTop: "3.125rem",
                padding: "0.625rem",
              }}
              variant="coral"
            >
              Ver todos os projetos
            </Button>
          </Link>
        </>
      ) : (
        <Skills skills={data.page.technologies} />
      )}
    </HomeContainer>
  );
}
