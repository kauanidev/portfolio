import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const ProjectImagesContainer = styled(BaseContainer)`
  margin: 4.375rem auto;
`;

export const ProjectImagesItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;

  & + & {
    margin-top: 4.375rem;
  }

  img {
    width: 100%;
    border-radius: 0.9375rem;
    object-fit: cover;
    border: 0.3125rem solid ${(props) => props.theme.secondary};
  }

  h2 {
    text-transform: uppercase;
    color: ${(props) => props.theme.secondary};
    font-size: 1.875rem;
    letter-spacing: 0.1875rem;
    text-align: center;
  }
`;
