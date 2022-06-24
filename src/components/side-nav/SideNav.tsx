import React from "react";
import { useStore } from "../../store/store";
import * as S from "./SideNav.styles";
import {
  BASE_ROUTE,
  HISTORY_ROUTE,
  ROCKETS_ROUTE,
} from "../../routes/app-routes-constants";

export const SideNav = () => {
  const { isMenuOpen, setMenuOpen } = useStore((state) => ({
    isMenuOpen: state.isMenuOpen,
    setMenuOpen: state.setMenuOpen,
  }));

  return (
    <S.SideNav isMenuOpen={isMenuOpen} data-testid="side-nav">
      <S.CloseBtn onClick={setMenuOpen} data-testid="close-btn">
        +
      </S.CloseBtn>

      <S.NavBox>
        <S.NavLink to={BASE_ROUTE}>Home</S.NavLink>

        <S.NavLink to={ROCKETS_ROUTE}>Rockets</S.NavLink>

        <S.NavLink to={HISTORY_ROUTE}>History</S.NavLink>
      </S.NavBox>
    </S.SideNav>
  );
};
