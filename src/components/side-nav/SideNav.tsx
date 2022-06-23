import React from "react";
import { useStore } from "../../store/store";
import * as S from "./SideNav.styles";
import {
  BASE_ROUTE,
  HISTORY_ROUTE,
  ROCKETS_ROUTE,
} from "../../routes/app-routes-constants";

export const SideNav = () => {
  const { getRockets, getHistory, isMenuOpen, handleMenu } = useStore(
    (state) => ({
      getRockets: state.getRockets,
      getHistory: state.getHistory,
      isMenuOpen: state.isMenuOpen,
      handleMenu: state.handleMenu,
    })
  );

  return (
    <S.SideNav isMenuOpen={isMenuOpen}>
      <S.CloseBtn onClick={handleMenu}>+</S.CloseBtn>

      <S.NavBox>
        <S.NavLink to={BASE_ROUTE}>Home</S.NavLink>

        <S.NavLink to={ROCKETS_ROUTE} onClick={getRockets}>
          Rockets
        </S.NavLink>

        <S.NavLink to={HISTORY_ROUTE} onClick={getHistory}>
          History
        </S.NavLink>
      </S.NavBox>
    </S.SideNav>
  );
};
