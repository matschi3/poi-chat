import styled from "styled-components";

export const StyledPoiCard = styled.div`
  position: relative;
  top: 60px;
  width: 100%;
  border: solid 1px black;
`;

export const StyledCardImage = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  border-radius: 55px;
  background-color: var(--color-gray2);
`;

export const StyledCardHeadingContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledCardHeading = styled.h2`
  margin: 2px 0;
`;

export const StyledCardDescription = styled.p`
  margin: 2px 0;
`;

export const StyledCardAdress = styled.p`
  margin: 2px 0;
`;

export const StyledCardListContainer = styled.div`
  position: absolute;
  top: 240px;
  left: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const StyledCardUl = styled.ul`
  list-style-type: none;
  width: 100%;
  font-size: var(--size-large);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
`;

export const StyledCardLi = styled.li`
  font-size: var(--size-mediumsmall);
  position: relative;
  margin-left: 32px;
`;

export const StyledCardLiDot = styled.span`
  position: absolute;
  top: 0;
  left: -28px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: var(--color-primary);
`;

export const StyledCardLiIndication = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 16px;
  width: auto;
  color: var(--color-gray3);
`;

export const StyledCardDivider = styled.div`
  width: calc(100% - 25px);
  border-top: 1px solid var(--color-gray2);
  box-sizing: border-box;
  height: 1px;
  align-self: center;
`;

export const StyledCardTabSwitch = styled.div`
  width: min(100% - 20px, 300px);
  height: 54px;
  border: 2px solid var(--color-gray2);
  border-radius: 100px;
  align-self: center;
  display: flex;
  justify-content: center;
`;

export const StyledCardTabItem = styled.span`
  width: calc(1 / 3 * 100%);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledCardTabItemLabel = styled.span`
  font-size: var(--size-medium);
`;
