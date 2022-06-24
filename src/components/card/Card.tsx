import React, { FC } from "react";
import * as S from "./Card.styles";

interface CardProps {
  imgUrl: string;
  rocketName: string;
  description: string;
  wikipedia: string;
}

const truncate = (str: string) =>
  str.length > 150 ? str.substring(0, 147) + "..." : str;

export const Card: FC<CardProps> = ({
  imgUrl,
  rocketName,
  description,
  wikipedia,
}) => {
  return (
    <S.CardArticle data-testid="article-card">
      <S.CardHero>
        <img src={imgUrl} alt={rocketName} />
      </S.CardHero>

      <S.CardHeader>
        <S.CardH3>{rocketName}</S.CardH3>
        <S.CardPara>{truncate(description)}</S.CardPara>
      </S.CardHeader>

      <a href={wikipedia} target="_blank" rel="external">
        <S.CardFooter>Check it out</S.CardFooter>
      </a>
    </S.CardArticle>
  );
};
