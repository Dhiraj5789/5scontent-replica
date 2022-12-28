import { css } from "@emotion/css";

export const navbarContainer = css`
  display: flex;
  padding: 2rem 4rem;
  color: red;
  z-index: 5;
`;

export const lang = css`
  display: flex;
  flex: 1;
`;

export const items = css`
  display: flex;
  flex: 1;
`;

export const title = css`
  display: flex;
  flex: 2;
  justify-content: flex-end;
`;

export const hoverOffset = css`
  @keyframes draw-in {
    0% {
      stroke-dashoffset: 95;
    }
    19% {
      stroke-dashoffset: 76;
    }
    38% {
      stroke-dashoffset: 57;
    }
    57% {
      stroke-dashoffset: 38;
    }
    76% {
      stroke-dashoffset: 19;
    }
    95% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes draw-out {
    0% {
      stroke-dashoffset: 0;
    }
    19% {
      stroke-dashoffset: 19;
    }
    38% {
      stroke-dashoffset: 38;
    }
    57% {
      stroke-dashoffset: 57;
    }
    76% {
      stroke-dashoffset: 76;
    }
    95% {
      stroke-dashoffset: 95;
    }
  }
  cursor: pointer;
  stroke-dasharray: 90;
  stroke-dashoffset: 95;
  animation: draw-out 0.8s;
  :hover {
    animation: draw-in 1s;
    stroke-dashoffset: 0;
  }
`;
