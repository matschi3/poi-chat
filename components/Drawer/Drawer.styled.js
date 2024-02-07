import styled from "styled-components";

export const DrawerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyledDrawer = styled.div`
  height: 140px;
  width: min(80%, 300px);
  background-color: var(--color-gray2);
  border-radius: 16px 16px 0 0;
`;
