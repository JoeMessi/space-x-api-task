import styled, { keyframes } from "styled-components";
import { COLORS } from "../../variables/variables";

const spin = keyframes`
    to {
        transform: rotate(1turn);
    }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    border: 2px solid ${COLORS.default_black};
    border-radius: 4em;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    margin-bottom: 3px;
    border-bottom-color: transparent;
    animation: ${spin} 1s linear infinite;
  }
`;
