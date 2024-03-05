import { useState } from "react";
import { AddBookmarkBox } from "./BookmarkBtn.styled";
import AddBookmarkSvg from "../../src/bookmark-add.svg";
import RemoveBookmarkSvg from "../../src/bookmark-remove.svg";
import BookmarkedSvg from "../../src/bookmarked.svg";
import BookmarkSvg from "../../src/bookmark.svg";

export default function BookmarkBtn({ isBookmarked, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <AddBookmarkBox
      onClick={() => onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isBookmarked && !isHovered && <BookmarkedSvg />}
      {isBookmarked && isHovered && <RemoveBookmarkSvg />}
      {!isBookmarked && !isHovered && <BookmarkSvg />}
      {!isBookmarked && isHovered && <AddBookmarkSvg />}
    </AddBookmarkBox>
  );
}
