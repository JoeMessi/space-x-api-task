import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../shared/button/Button";
import { useStore } from "../../store/store";
import * as S from "./SideNav.styles";

interface SideNavProps {
  isMenuOpen: boolean;
  handleisMenuOpen: () => void;
}

export const SideNav: FC<SideNavProps> = ({ isMenuOpen, handleisMenuOpen }) => {
  const { getRockets, getHistory } = useStore((state) => ({
    getRockets: state.getRockets,
    getHistory: state.getHistory,
  }));

  return (
    <S.SideNav isMenuOpen={isMenuOpen}>
      <S.CloseBtn onClick={handleisMenuOpen}>+</S.CloseBtn>
      <Link to="/rockets">
        <Button label="Rockets" onClick={getRockets} />
      </Link>

      <Link to="/history">
        <Button label="History" onClick={getHistory} />
      </Link>
    </S.SideNav>
  );
};
