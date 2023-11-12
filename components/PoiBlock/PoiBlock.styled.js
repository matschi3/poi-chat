import styled from "styled-components";

export const StyledBlockContainer = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 194px;
  right: 16px;
  left: 16px;
  height: 356px;
  font-size: 14px;
  color: var(--color-black);
`;

export const StyledBlockBox = styled.div`
  position: relative;
  width: 100%;
  height: 77px;
  text-align: left;
  font-size: var(--size-mediumsmall);
  color: var(--color-black);
`;

export const StyledPoiBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 77px;
  top: 0px;
  right: 0px;
  left: 0px;
`;

export const StyledBlockImage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8px;
  background-color: var(--color-gray1);
  width: 50px;
  height: 50px;
`;

export const StyledBlockHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 66px;
  font-size: 16px;
  font-weight: 600;
`;
