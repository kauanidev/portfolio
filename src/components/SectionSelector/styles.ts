import styled, { css } from "styled-components";

export const SectionSelectorContainer = styled.section`
  background: ${(props) => props.theme.shape[400]};
  padding: 1rem 1.2rem;
  border-radius: 1.25rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5.625rem;
  margin-bottom: 4rem;
`;

interface SectionButtonProps {
  isActive: boolean;
}

export const SectionButton = styled.button<SectionButtonProps>`
  border-radius: 0.625rem;
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
