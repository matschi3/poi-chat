import {
  StyledFooter,
  StyledNavLogin,
  StyledPlaceholder,
  StyledNavHome,
  StyledNavProfile,
} from "./Footer.styled";
import { useSession } from "next-auth/react";

export default function Footer() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }

  if (session) {
    return (
      <StyledFooter>
        <StyledNavHome />
        <StyledPlaceholder />
        <StyledPlaceholder />
        <StyledPlaceholder />
        <StyledNavProfile />
      </StyledFooter>
    );
  } else {
    return (
      <StyledFooter>
        <StyledNavLogin />
      </StyledFooter>
    );
  }
}
