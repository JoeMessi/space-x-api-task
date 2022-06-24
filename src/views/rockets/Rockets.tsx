import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store";
import { Card } from "../../components/card/Card";
import * as S from "./Rockets.styles";

export const Rockets = () => {
  const { rockets, setRockets } = useStore((state) => ({
    rockets: state.rockets,
    setRockets: state.setRockets,
  }));

  useEffect(() => {
    setRockets();
  }, []);

  return (
    <S.RocketsSection data-testid="rockets">
      <S.H2Box>
        <S.H2>Rockets</S.H2>
      </S.H2Box>

      <S.RocketsCards>
        {rockets.map((rocket) => (
          <Card
            key={rocket.rocket_id}
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
