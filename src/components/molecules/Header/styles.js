import { css } from "@emotion/css";

export const styContainerDesktop = css`
  height: auto;
  width: 100%;
  position: relative;
  transition: all 0.3s;
`;

export const styWrapMenu = css`
  position: fixed;
  z-index: 1100;
  background-color: transparent;
  width: 100%;
  height: 84px;
  left: 0px;
  transition: height 0.3s, background-color 0.3s;
`;

export const styLimiterMenu = css`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: 0.5s;
`;

export const styMainMenu = css`
  display: flex;
  align-items: center;
`;

export const styMainMenuLink = css`
  position: relative;
  padding: 0 10px;
  margin: 0px 4px 0px 14px;
`;
