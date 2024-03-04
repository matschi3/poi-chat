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
import { useSession } from "next-auth/react";

export default function PoiBlock({ poi }) {
  const router = useRouter();
  const { data: session } = useSession();

  async function toggleFavorite(id) {
    try {
      const response = await fetch(
        `/api/user/favorites/${session.user.email}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const favs = await response.json();
      let method = favs.favorites.includes(id) ? "DELETE" : "PUT";

      const updateResponse = await fetch(
        `/api/user/favorites/${session.user.email}`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ poiId: id }),
        }
      );
      if (method === "DELETE" && router.replace("/bookmarks"));
      if (!updateResponse.ok) {
        throw new Error(
          `Failed to update favorites with status: ${updateResponse.status}`
        );
      }
      const updatedFavs = await updateResponse.json();
    } catch (error) {
      return error;
    }
  }

  return (
    <>
      <StyledBlockBox
        onClick={() => {
          router.push(`/poi/${poi._id}`);
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
      <button onClick={() => toggleFavorite(poi._id)}>Favorite</button>
      <StyledBlockDivider />
    </>
  );
}
