import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
}

export const SideNav = styled.nav<Props>`
  height: 100%;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "250px" : "0")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
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

  &:hover {
    color: #f1f1f1;
  }
`;
