import {
  StyledSearchContainer,
  SearchInput,
  SearchClearButton,
} from "./Search.styled";

export default function Search({ handleSearch, searchQuery }) {
  return (
    <StyledSearchContainer>
      <SearchInput
        onChange={(event) => handleSearch(event.target.value)}
        value={searchQuery}
      />
      <SearchClearButton>×</SearchClearButton>
    </StyledSearchContainer>
  );
}
