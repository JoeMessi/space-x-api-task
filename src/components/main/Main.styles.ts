import styled from "styled-components";
import { deviceConstraints } from "../../utils/breakpoints";

interface Props {
  isMenuOpen: boolean;
}

export const Main = styled.main<Props>`
  transition: margin-left 0.5s;
  padding: 0;

  margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
  margin-left: 0;
  @media ${deviceConstraints.tablet} {
    margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
  }

  @media ${deviceConstraints.smartphoneOrTablet} {
    padding: 35px;
  }
`;

export const ConentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;
