import styled from "styled-components";
import { BaseContainer } from "../../styles/global";

export const HomeContainer = styled(BaseContainer)`
  margin-top: 80px;

  > p {
    max-width: 39.375rem;
    margin: 3.125rem auto;
    line-height: 150%;
  }
`;

export const ButtonsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 39.375rem;
  margin: 0 auto;
`;
