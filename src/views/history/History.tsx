import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import * as S from "./History.styles";

export const History = () => {
  const { history, getHistory } = useStore((state) => ({
    history: state.history,
    getHistory: state.getHistory,
  }));

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <S.HistorySection>
      <S.H2Box>
        <S.H2>Cronological History Facts</S.H2>
      </S.H2Box>

      <S.HistoryList>
        {history.map((fact) => (
          <S.HistoryListItem key={fact.id}>{fact.details}</S.HistoryListItem>
        ))}
      </S.HistoryList>
    </S.HistorySection>
  );
};
