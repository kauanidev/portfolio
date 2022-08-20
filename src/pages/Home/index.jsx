import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer } from "./styles";
import { Button } from "../../components/Button";
import { HiDownload } from "react-icons/hi";
import { Projects } from "../../components/Projects";
import { SectionSelector } from "../../components/SectionSelector";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ad
        aperiam laboriosam natus dicta officia odio, deserunt voluptas illum
        nobis ipsam vero quia esse neque placeat tenetur accusantium quam?
        Mollitia.
      </p>
      <ButtonsContainer>
        <Button variant="coral">
          Download CV <HiDownload />
        </Button>
        <Button>Contato</Button>
      </ButtonsContainer>
      <SectionSelector />
      <Projects />
    </HomeContainer>
  );
}
