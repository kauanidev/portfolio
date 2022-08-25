import { rgba } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProjectItemContainer = styled(Link)`
  height: 14.125rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.9375rem;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 0.8s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }

    div {
      opacity: 1;
    }
  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  inset: 0;
  background: ${(props) => rgba(props.theme.primary, 0.8)};
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.8s;

  h3 {
    font-size: 1.5625rem;
    color: ${(props) => props.theme.title};
  }

  ul {
    display: flex;
    gap: 0.3125rem;
    position: absolute;
    bottom: 0.9375rem;
  }

  li {
    background: ${(props) => props.theme.shape[400]};
    padding: 0.125rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 999px;
  }
`;
