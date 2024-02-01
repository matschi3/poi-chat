import styled from "styled-components";

export const StyledBlockContainer = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: 70px;
  right: 16px;
  left: 16px;
  height: 356px;
  font-size: 14px;
  color: var(--color-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledBlockDivider = styled.div`
  width: calc(100% - 65px);
  border-top: 1px solid var(--color-gray2);
  box-sizing: border-box;
  height: 1px;
`;

export const StyledBlockBox = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  text-align: left;
  font-size: var(--size-mediumsmall);
  color: var(--color-black);
`;

export const StyledPoiBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
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

export const StyledBlockHeading = styled.div`
  position: absolute;
  top: 2px;
  left: 66px;
  font-size: 16px;
  font-weight: 600;
  line-height: 0.9;
`;

export const StyledBlockText = styled.div`
  position: absolute;
  width: calc(100% - 74px);
  top: 28px;
  left: 66px;
  display: inline-block;
`;

export const StyledBlockLastUpdate = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  color: var(--color-gray3);
  text-align: right;
  background-color: var(--color-gray2);
  border-radius: 4px;
  padding: 0px 4px;
`;
