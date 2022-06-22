import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
}

export const Main = styled.main<Props>`
  margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
  transition: margin-left 0.5s;
`;

export const ConentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export const OpenMenu = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const H1 = styled.h1``;
