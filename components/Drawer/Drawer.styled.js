import styled from "styled-components";

export const DrawerContainer = styled.div`
  position: fixed;
  bottom: var(--header-height);
  left: 0;
  right: 0;
  height: 140px;
  width: min(80%, 300px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const DrawerFocus = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-gray3);
  opacity: 0.5;
`;

export const StyledDrawer = styled.div`
  height: 140px;
  width: 100%;
  background-color: var(--color-gray2);
  border-radius: 16px 16px 0 0;
  border: 2px solid var(--color-gray3);
  border-bottom: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DrawerButton = styled.span`
  background-color: var(--color-primary);
  ${(props) => props.$closeBtn && "background-color: var(--color-warning)"};
  width: 80%;
  height: 30px;
  border-radius: 8px;
  margin: 1em auto 0 auto;
  text-align: center;
  line-height: 30px;
`;
