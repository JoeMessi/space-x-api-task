import styled from "styled-components";
import { deviceConstraints } from "../../utils/breakpoints";
import { COLORS } from "../../variables/variables";

export const RocketsSection = styled.section`
  width: 80%;
  margin: 0 auto;

  @media ${deviceConstraints.desktopSmall} {
    width: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
`;

export const H2Box = styled.div`
  background: ${COLORS.default_black};
  margin: 0 auto 45px auto;
  border-radius: 4px;
  width: 100%;

  @media ${deviceConstraints.desktopSmall} {
    width: 350px;
  }
`;

export const H2 = styled.h2`
  color: ${COLORS.white_text};
  text-align: center;
  margin-bottom: 35px;
  padding: 12px;
`;

export const RocketsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;
