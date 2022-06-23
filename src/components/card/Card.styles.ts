import styled from "styled-components";
import { COLORS } from "../../variables/variables";

export const CardArticle = styled.article`
  background: white;
  border-radius: 8px;
  box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
`;

export const CardHero = styled.div`
  height: 150px;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardHeader = styled.header`
  padding: 0 14px;
  text-align: center;
  height: 170px;
`;

export const CardH3 = styled.h3`
  color: ${COLORS.default_black};
`;

export const CardPara = styled.p`
  font-size: 14px;
  color: ${COLORS.light_text};
  font-weight: 300;
  line-height: 1.5;
`;

export const CardFooter = styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: ${COLORS.red};
  &:hover {
    background-color: ${COLORS.red_hover};
  }
`;
