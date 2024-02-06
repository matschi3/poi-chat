import styled from "styled-components";

export const StyledSearchContainer = styled.section`
  position: absolute;
  top: var(--header-height);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray3);
`;

export const SearchInput = styled.input`
  width: calc(100% - 32px);
  height: 32px;
  border-radius: 16px;
  caret-color: var(--color-black);
`;
