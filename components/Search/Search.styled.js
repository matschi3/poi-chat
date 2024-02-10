import styled from "styled-components";

export const StyledSearchContainer = styled.section`
  position: relative;
  top: var(--header-height);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray2);
`;

export const SearchInput = styled.input`
  width: calc(100% - 32px);
  height: 32px;
  border-radius: 16px;
  caret-color: var(--color-black);
  &:focus {
    outline-color: var(--color-primary);
  }
`;

export const SearchClearButton = styled.span`
  position: absolute;
  background-color: var(--color-gray3);
  &:hover {
    background-color: var(--color-warning);
  }
  right: 22px;
  top: 14px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  text-align: center;
  line-height: 22px;
`;
