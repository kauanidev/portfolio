import { HeaderContainer, PersonalSummary, SocialsContainer } from "./styles";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export function Header() {
  return (
    <HeaderContainer>
      <img src="/Photo1.png" />
      <PersonalSummary>
        <h1>Kauani Evangelista de Lima</h1>
        <p>Front-end Developer & Graphic Designer</p>
        <SocialsContainer>
          <a href="https://github.com/kauanidev" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kauanidev/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://discord.gg/mGeMzH5vyA" target="_blank">
            <FaDiscord />
          </a>
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5545984296579"
            target="_blank"
          >
            <RiWhatsappFill />
          </a>
        </SocialsContainer>
      </PersonalSummary>
    </HeaderContainer>
  );
}
