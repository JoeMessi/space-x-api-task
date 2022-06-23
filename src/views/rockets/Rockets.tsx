import React, { useEffect } from "react";
import { useStore } from "../../store/store";
import { Card } from "../../components/card/Card";
import * as S from "./Rockets.styles";

export const Rockets = () => {
  const { rockets, getRockets } = useStore((state) => ({
    rockets: state.rockets,
    getRockets: state.getRockets,
  }));

  useEffect(() => {
    getRockets();
  }, []);

  return (
    <S.RocketsSection>
      <S.H2Box>
        <S.H2>Rockets</S.H2>
      </S.H2Box>

      <S.RocketsCards>
        {rockets.map((rocket) => (
          <Card
            imgUrl={rocket.flickr_images[0]}
            rocketName={rocket.rocket_name}
            description={rocket.description}
            wikipedia={rocket.wikipedia}
          />
        ))}
      </S.RocketsCards>
    </S.RocketsSection>
  );
};
