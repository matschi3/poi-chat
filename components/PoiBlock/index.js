import {
  StyledPoiBlock,
  StyledBlockBox,
  StyledBlockImage,
  StyledBlockHeader,
} from "./PoiBlock.styled";

export default function PoiBlock({ poi }) {
  return (
    <StyledBlockBox>
      <StyledPoiBlock>
        <StyledBlockImage />
        <StyledBlockHeader>{poi.properties.name}</StyledBlockHeader>
      </StyledPoiBlock>
    </StyledBlockBox>
  );
}
