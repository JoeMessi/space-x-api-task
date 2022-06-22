import React, { FC } from "react";
import { useStore } from "../../store/store";
import { Card } from "../../components/card/Card";
import * as S from "./Rockets.styles";

interface MainProps {
  isMenuOpen: boolean;
  handleisMenuOpen: () => void;
}

export const Rockets: FC<MainProps> = ({ isMenuOpen, handleisMenuOpen }) => {
  const rockets = useStore((state) => state.rockets);

  return (
    <S.Main isMenuOpen={isMenuOpen}>
      <S.OpenMenu onClick={handleisMenuOpen}>0</S.OpenMenu>

      <S.Header>
        <S.H1>Rockets</S.H1>
      </S.Header>

      <S.ConentSection>
        {rockets.map((rocket) => (
          <Card
            imgUrl={rocket.flickr_images[0]}
            rocketName={rocket.rocket_name}
            description={rocket.description}
            wikipedia={rocket.wikipedia}
          />
        ))}
      </S.ConentSection>
    </S.Main>
  );
};
