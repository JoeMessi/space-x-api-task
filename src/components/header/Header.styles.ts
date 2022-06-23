import styled from "styled-components";
import { deviceConstraints } from "../../utils/breakpoints";
import { COLORS } from "../../variables/variables";

interface Props {
  isMenuOpen: boolean;
}

export const Header = styled.header<Props>`
  transition: margin-left 0.5s;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 14px;

  margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
  margin-left: 0;
  @media ${deviceConstraints.tablet} {
    margin-left: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
    width: 76%;
    padding: 15px 15px 0 15px;
  }
`;

export const H1 = styled.h1`
  color: ${COLORS.default_black};
  font-size: 30px;
  text-align: center;
  @media ${deviceConstraints.smartphoneOrTablet} {
    font-size: 38px;
  }
`;

export const LineSpan = styled.span`
  background: ${COLORS.red_hover};
  height: 12px;
  display: block;
  width: 90%;
  margin: 0 auto;

  @media ${deviceConstraints.desktopSmall} {
    width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  left: 12px;
  top: 10px;
  cursor: pointer;

  display: none;

  @media ${deviceConstraints.tablet} {
    display: block;
  }
`;

export const HamburgerLines = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${COLORS.default_black};
  margin: 6px 0;
`;
