import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  img {
    width: 13.4375rem;
    height: 13.4375rem;
    object-fit: cover;
    border-radius: 50%;
    border: 0.3125rem solid ${(props) => props.theme.secondary};
  }

  @media (max-width: 705px) {
    flex-direction: column;
  }
`;

export const PersonalSummary = styled.div`
  h1 {
    font-weight: 500;
    margin-bottom: 0.625rem;
    color: ${(props) => props.theme.title};
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 705px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.875rem;

  a {
    transition: 0.4s;

    svg {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  a:hover {
    color: ${(props) => props.theme.secondary};
    transform: scale(0.9);
  }
`;
