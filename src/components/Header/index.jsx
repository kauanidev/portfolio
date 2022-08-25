import { HeaderContainer, PersonalSummary, SocialsContainer } from "./styles";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export function Header({ data }) {
  return (
    <HeaderContainer>
      <img src={data.photo.url} />
      <PersonalSummary>
        <h1>Kauani Evangelista de Lima</h1>
        <p>Front-end Developer & Graphic Designer</p>
        <SocialsContainer>
          {data.socials.map((item) => {
            return (
              <a
                key={item.name}
                dangerouslySetInnerHTML={{ __html: item.icon }}
                href={item.link}
                target="_blank"
              />
            );
          })}
        </SocialsContainer>
      </PersonalSummary>
    </HeaderContainer>
  );
}
