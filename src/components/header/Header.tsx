import React from "react";
import { useStore } from "../../store/store";

import * as S from "./Header.styles";

export const Header = () => {
  const { handleMenu, isMenuOpen } = useStore((state) => ({
    handleMenu: state.handleMenu,
    isMenuOpen: state.isMenuOpen,
  }));

  return (
    <S.Header isMenuOpen={isMenuOpen}>
      <S.HamburgerMenu onClick={handleMenu}>
        <S.HamburgerLines />
        <S.HamburgerLines />
        <S.HamburgerLines />
      </S.HamburgerMenu>

      <S.LineSpan />
      <S.H1>Space X API Task</S.H1>
      <S.LineSpan />
    </S.Header>
  );
};
