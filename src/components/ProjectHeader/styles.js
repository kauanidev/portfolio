import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const ProjectHeaderContainer = styled(BaseContainer)`
  background: ${(props) => props.theme.shape[600]};
  padding: 1.875rem;
  border-radius: 0.9375rem;
  margin-top: -8.125rem;
  border: 0.3125rem solid ${(props) => props.theme.primary};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    button,
    a {
      font-size: 1rem;
      padding: 0.625rem 1.25rem;
    }

    @media (max-width: 370px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  h1 {
    color: ${(props) => props.theme.title};
    font-size: 1.75rem;
    margin-top: 1.875rem;
    margin-bottom: 0.625rem;
  }

  ul {
    display: flex;
    gap: 1.875rem;
    align-items: center;
    margin-top: 0.625rem;
    width: 100%;

    li,
    a {
      display: flex;
      align-items: center;
      gap: 0.3125rem;
      transition: 0.4s;

      svg {
        opacity: 0.5;
        transition: 0.4s;
      }
    }

    a:hover {
      color: ${(props) => props.theme.primary};

      svg {
        opacity: 1;
      }
    }
  }
  @media (max-width: 550px) {
    text-align: center;

    ul {
      justify-content: center;
    }
  }
`;
