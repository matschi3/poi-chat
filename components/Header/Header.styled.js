import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-primary);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  position: absolute;
  left: 16px;
`;

export const HeaderRight = styled.div`
  position: absolute;
  right: 16px;
`;

export const HeaderTitle = styled.h1`
  color: var(--color-white);
  font-size: 30px;
  font-weight: 600;
  text-shadow: 2px 2px 2px var(--color-black);
`;

export const BackButton = styled.span`
  padding: 8px;
`;
