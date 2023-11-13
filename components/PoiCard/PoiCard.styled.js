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

export const StyledCardHeading = styled.h2`
  position: absolute;
  top: 125px;
`;

export const StyledCardDescription = styled.p`
  position: absolute;
  top: 160px;
`;

export const StyledCardAdress = styled.p`
  position: absolute;
  top: 200px;
`;

export const StyledCardListContainer = styled.div`
  position: absolute;
  top: 240px;
  display: flex;
  flex-direction: column;
`;

export const StyledCardUl = styled.ul`
  list-style-type: none;
`;
