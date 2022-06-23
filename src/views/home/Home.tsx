import React from "react";

import * as S from "./Home.styles";

export const Home = () => {
  return (
    <S.HomeSection>
      <S.H2> Consuming APIs is fun!</S.H2>
      <S.HomePara>
        This is a small app where you can see data from the Space X API.
      </S.HomePara>
    </S.HomeSection>
  );
};
