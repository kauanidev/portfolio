import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const ProjectsContainer = styled(BaseContainer)`
  margin: 3.125rem auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.625rem;
    margin-bottom: 2.5rem;
  }

  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.shape[600]};
    font-size: 1.875rem;
    padding-left: 0.625rem;
    padding-right: 1.25rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    border-radius: 0rem 3.125rem 3.125rem 0rem;

    &:hover {
      background: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.shape[600]};
      filter: brightness(1.3);
    }
  }

  h1 {
    font-size: 2.8125rem;
    color: ${(props) => props.theme.title};
  }
`;
