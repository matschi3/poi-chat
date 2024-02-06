import { StyledSearchContainer, SearchInput } from "./Search.styled";

export default function Search({ handleSearch, searchQuery }) {
  return (
    <StyledSearchContainer>
      <SearchInput
        onChange={(event) => handleSearch(event.target.value)}
        value={searchQuery}
      />
    </StyledSearchContainer>
  );
}
