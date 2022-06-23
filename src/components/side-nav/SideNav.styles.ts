import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../variables/variables";
import { deviceConstraints } from "../../utils/breakpoints";

interface Props {
  isMenuOpen: boolean;
}

export const SideNav = styled.nav<Props>`
  height: auto;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: ${COLORS.default_black};
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 0;

  @media ${deviceConstraints.tablet} {
    height: 100%;
    width: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
    padding-top: 60px;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 45px;
  margin-left: 50px;
  transform: rotate(45deg);
  cursor: pointer;
  color: #818181;
  display: none;

  &:hover {
    color: ${COLORS.white_text};
  }
  @media ${deviceConstraints.tablet} {
    display: block;
  }
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;

  @media ${deviceConstraints.tablet} {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const NavLink = styled(Link)`
  padding: 16px 12px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: ${COLORS.white_text};
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: #8d8d8d91;
  }

  border-bottom: none;

  &:first-child {
    border-top: none;
  }

  &:not(:last-child) {
    border-right: 1px solid #ffffff42;
  }

  @media ${deviceConstraints.tablet} {
    border-bottom: 1px solid #ffffff42;

    &:first-child {
      border-top: 1px solid #ffffff42;
    }

    &:not(:last-child) {
      border-right: none;
    }
  }
`;
