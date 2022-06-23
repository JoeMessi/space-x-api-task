import React from "react";
import { useStore } from "../../store/store";
import * as S from "./SideNav.styles";
import {
  BASE_ROUTE,
  HISTORY_ROUTE,
  ROCKETS_ROUTE,
} from "../../routes/app-routes-constants";
import { useIt } from "../../store/useStore";

export const SideNav = () => {
  const { getHistory, isMenuOpen, handleMenu } = useStore((state) => ({
    getRockets: state.getRockets,
    getHistory: state.getHistory,
    isMenuOpen: state.isMenuOpen,
    handleMenu: state.handleMenu,
    setLoading: state.setLoading,
  }));

  const { test } = useIt();

  return (
    <S.SideNav isMenuOpen={isMenuOpen}>
      <S.CloseBtn onClick={handleMenu}>+</S.CloseBtn>

      <S.NavBox>
        <S.NavLink to={BASE_ROUTE}>Home</S.NavLink>

        <S.NavLink to={ROCKETS_ROUTE} onClick={test}>
          Rockets
        </S.NavLink>

        <S.NavLink to={HISTORY_ROUTE} onClick={getHistory}>
          History
        </S.NavLink>
      </S.NavBox>
    </S.SideNav>
  );
};
