import styled from "styled-components";
import { deviceConstraints } from "../../utils/breakpoints";
import { COLORS } from "../../variables/variables";

export const HistorySection = styled.section`
  width: 80%;
  margin: auto;

  @media ${deviceConstraints.desktopSmall} {
    width: 76%;
  }
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

export const HistoryList = styled.ul`
  font-size: 18px;
  line-height: 1.5;
`;

export const HistoryListItem = styled.li`
  padding: 8px 0 8px 20px;
  position: relative;
  color: ${COLORS.light_text};

  &::before {
    content: "~";
    position: absolute;
    left: 0;
  }
`;
