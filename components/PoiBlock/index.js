import {
  StyledPoiBlock,
  StyledBlockDivider,
  StyledBlockBox,
  StyledBlockImage,
  StyledBlockHeader,
  StyledBlockText,
  StyledBlockLastUpdate,
} from "./PoiBlock.styled";

export default function PoiBlock({ poi }) {
  return (
    <>
      <StyledBlockBox>
        <StyledPoiBlock>
          <StyledBlockImage />
          <StyledBlockHeader>
            {poi.properties.name.length < 32
              ? poi.properties.name
              : poi.properties.name.slice(0, 32) + ".."}
          </StyledBlockHeader>
          <StyledBlockText>
            {poi.properties.description.length < 32
              ? poi.properties.description
              : poi.properties.description.slice(0, 32) + ".."}
          </StyledBlockText>
          {/* <StyledBlockLastUpdate>6m ago</StyledBlockLastUpdate> */}
        </StyledPoiBlock>
      </StyledBlockBox>
      <StyledBlockDivider />
    </>
  );
}
