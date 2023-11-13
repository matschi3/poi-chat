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
  background-color: #5db075;
`;
