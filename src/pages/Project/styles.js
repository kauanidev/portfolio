import styled from "styled-components";
import { rgba } from "polished";

export const ProjectContainer = styled.div``;

export const ProjectBanner = styled.div`
  width: 100%;
  height: 18.75rem;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
  border-bottom: 0.3125rem solid ${(props) => props.theme.primary};

  @media (max-width: 705px) {
    background: ${(props) =>
        `linear-gradient(${rgba(props.theme.primary, 0.5)}, ${rgba(
          props.theme.primary,
          0.5
        )})`},
      url(${(props) => props.src});
    background-size: cover;
  }
`;
