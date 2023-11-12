import {
  StyledPoiBlock,
  StyledBlockBox,
  StyledBlockImage,
  StyledBlockHeader,
  StyledBlockText,
  StyledBlockLastUpdate,
} from "./PoiBlock.styled";

export default function PoiBlock({ poi }) {
  return (
    <StyledBlockBox>
      <StyledPoiBlock>
        <StyledBlockImage />
        <StyledBlockHeader>{poi.properties.name}</StyledBlockHeader>
        <StyledBlockText>{poi.properties.description}</StyledBlockText>
        <StyledBlockLastUpdate>6m ago</StyledBlockLastUpdate>
      </StyledPoiBlock>
    </StyledBlockBox>
  );
}
