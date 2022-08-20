import styled, { css } from "styled-components";

export const SectionSelectorContainer = styled.section`
  background: ${(props) => props.theme.shape[400]};
  padding: 1rem 1.2rem;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5.625rem;
  margin-bottom: 4rem;
`;

export const SectionButton = styled.button`
  border-radius: 10px;
  height: 3.75rem;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  color: ${(props) => props.theme.text};
  transition: 0.4s;
  ${(props) =>
    props.isActive &&
    css`
      background: ${(props) => props.theme.shape[600]};
    `}
`;