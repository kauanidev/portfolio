import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const HomeContainer = styled(BaseContainer)`
  margin-top: 5rem;
  margin-bottom: 5rem;

  > p {
    max-width: 39.375rem;
    margin: 3.125rem auto;
    line-height: 150%;

    span {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

export const ButtonsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.875rem;
  max-width: 39.375rem;
  margin: 0 auto;
`;
