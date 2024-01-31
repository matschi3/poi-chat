import {
  StyledPoiBlock,
  StyledBlockDivider,
  StyledBlockBox,
  StyledBlockImage,
  StyledBlockHeading,
  StyledBlockText,
  StyledBlockLastUpdate,
} from "./PoiBlock.styled";
import { useRouter } from "next/router";

export default function PoiBlock({ poi }) {
  const router = useRouter();
  return (
    <>
      <StyledBlockBox
        onClick={() => {
          router.push(`/poi/${poi.id}`);
        }}
      >
        <StyledPoiBlock>
          <StyledBlockImage />
          <StyledBlockHeading>
            {poi.properties[0].name.length < 32
              ? poi.properties[0].name
              : poi.properties[0].name.slice(0, 32) + ".."}
          </StyledBlockHeading>
          <StyledBlockText>
            {poi.properties[0].description.length < 32
              ? poi.properties[0].description
              : poi.properties[0].description.slice(0, 32) + ".."}
          </StyledBlockText>
          {/* <StyledBlockLastUpdate>6m ago</StyledBlockLastUpdate> */}
        </StyledPoiBlock>
      </StyledBlockBox>
      <StyledBlockDivider />
    </>
  );
}
