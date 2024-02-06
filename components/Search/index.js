import { StyledSearchContainer, SearchInput } from "./Search.styled";

export default function Search({ handleSearch }) {
  return (
    <StyledSearchContainer>
      <SearchInput onChange={(event) => handleSearch(event.target.value)} />
    </StyledSearchContainer>
  );
}
