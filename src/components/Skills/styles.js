import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 4.375rem;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  transition: 0.4s;

  svg {
    width: 4.375rem;
    height: 4.375rem;
  }

  p {
    font-size: 1.375rem;
    font-weight: 500;
  }

  &:hover {
    color: ${(props) => props.theme.secondary};
    transform: scale(0.9);
  }
`;
