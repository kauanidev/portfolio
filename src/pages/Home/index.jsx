import { Header } from "../../components/Header";
import { ButtonsContainer, HomeContainer } from "./styles";
import { Button } from "../../components/Button";
import { HiDownload } from "react-icons/hi";
import { Projects } from "../../components/Projects";
import { SectionSelector } from "../../components/SectionSelector";
import { Skills } from "../../components/Skills";
import { useSelector } from "react-redux";

export function Home() {
  const currentSection = useSelector((state) => state.home.currentSection);
  return (
    <HomeContainer>
      <Header />
      <p>
        Toda a tecnologia em si me cativa, mas como sempre fui muito curiosa em
        relação ao mundo da programação, decidi mergulhar de cabeça no
        desenvolvimento web e conheci a área do front-end, no qual eu,
        felizmente, posso conciliar minhas duas paixões:{" "}
        <span>desenvolvimento web</span> e <span>design gráfico</span>.
      </p>
      <ButtonsContainer>
        <Button variant="coral">
          Download CV <HiDownload />
        </Button>
        <Button>Contato</Button>
      </ButtonsContainer>
      <SectionSelector />
      {currentSection === "portfólio" ? <Projects /> : <Skills />}
    </HomeContainer>
  );
}
