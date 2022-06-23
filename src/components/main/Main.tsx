import React, { FC, ReactNode } from "react";
import { useStore } from "../../store/store";
import * as S from "./Main.styles";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const isMenuOpen = useStore((state) => state.isMenuOpen);

  return <S.Main isMenuOpen={isMenuOpen}>{children}</S.Main>;
};
