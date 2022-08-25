import styled from "styled-components";

export const ProjectContainer = styled.div``;

export const ProjectBanner = styled.div`
  width: 100%;
  height: 18.75rem;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
  border-bottom: 0.3125rem solid ${(props) => props.theme.primary};
`;
