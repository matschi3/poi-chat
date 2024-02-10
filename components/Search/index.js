import {
  StyledSearchContainer,
  SearchInput,
  SearchClearButton,
} from "./Search.styled";

export default function Search({ handleSearch, searchQuery, clearSearch }) {
  return (
    <StyledSearchContainer>
      <SearchInput
        onChange={(event) => handleSearch(event.target.value)}
        value={searchQuery}
      />
      <SearchClearButton onClick={() => clearSearch()}>×</SearchClearButton>
    </StyledSearchContainer>
  );
}
