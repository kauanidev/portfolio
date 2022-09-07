import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22.625rem, 1fr));
  gap: 1.875rem;

  @media (max-width: 25rem) {
    grid-template-columns: 1fr;
  }
`;
