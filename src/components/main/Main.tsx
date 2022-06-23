import React, { FC, ReactNode } from "react";
import { useStore } from "../../store/store";
import { LoadingSpinner } from "../loading-spinner/LoadingSpinner";
import * as S from "./Main.styles";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  const { isMenuOpen, loading } = useStore((state) => ({
    isMenuOpen: state.isMenuOpen,
    loading: state.loading,
  }));

  console.log({ loading: loading });

  return (
    <S.Main isMenuOpen={isMenuOpen}>
      {loading ? <LoadingSpinner /> : children}
    </S.Main>
  );
};
