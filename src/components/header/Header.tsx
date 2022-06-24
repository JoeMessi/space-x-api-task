import React from "react";
import { useStore } from "../../store/store";

import * as S from "./Header.styles";

export const Header = () => {
  const { setMenuOpen, isMenuOpen } = useStore((state) => ({
    setMenuOpen: state.setMenuOpen,
    isMenuOpen: state.isMenuOpen,
  }));

  return (
    <S.Header isMenuOpen={isMenuOpen} data-testid="header">
      <S.HamburgerMenu onClick={setMenuOpen} data-testid="hamburger">
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
