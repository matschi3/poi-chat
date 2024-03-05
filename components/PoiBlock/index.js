import {
  StyledPoiBlock,
  StyledBlockDivider,
  StyledBlockBox,
  StyledBlockImage,
  StyledBlockHeading,
  StyledBlockText,
  StyledBlockLastUpdate,
  AddBookmarkBtn,
} from "./PoiBlock.styled";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function PoiBlock({ poi }) {
  const router = useRouter();
  const { data: session } = useSession();

  const timeNow = new Date().getTime();
  const timeFromData = new Date(poi.updatedAt);
  const diffInMilliseconds = timeNow - timeFromData;
  const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);
  const diffInHours = Math.floor(diffInMilliseconds / 1000 / 60 / 60);
  const diffInDays = Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24);
  let changedAgo;
  if (diffInMinutes < 60) {
    changedAgo = `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    changedAgo = `${diffInHours} hours ago`;
  } else {
    changedAgo = `${diffInDays} days ago`;
  }

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
      <StyledBlockBox>
        <AddBookmarkBtn onClick={() => toggleFavorite(poi._id)} />
        <StyledPoiBlock
          onClick={() => {
            router.push(`/poi/${poi._id}`);
          }}
        >
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
          {poi.updatedAt !== undefined && (
            <StyledBlockLastUpdate>{changedAgo}</StyledBlockLastUpdate>
          )}
        </StyledPoiBlock>
      </StyledBlockBox>
      <StyledBlockDivider />
    </>
  );
}
