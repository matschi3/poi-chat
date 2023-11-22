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
            {poi.properties.name.length < 32
              ? poi.properties.name
              : poi.properties.name.slice(0, 32) + ".."}
          </StyledBlockHeading>
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
