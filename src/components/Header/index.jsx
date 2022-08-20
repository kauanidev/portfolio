import { HeaderContainer, PersonalSummary, SocialsContainer } from "./styles";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export function Header() {
  return (
    <HeaderContainer>
      <img src="/Photo1.png" />
      <PersonalSummary>
        <h1>Kauani Evangelista de Lima</h1>
        <p>Front-end Developer</p>
        <SocialsContainer>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaDiscord />
          </a>
          <a href="#">
            <RiWhatsappFill />
          </a>
        </SocialsContainer>
      </PersonalSummary>
    </HeaderContainer>
  );
}
