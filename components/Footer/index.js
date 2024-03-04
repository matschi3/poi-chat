import {
  StyledFooter,
  StyledNavLogin,
  StyledNavHome,
  StyledNavNearby,
  StyledNavNew,
  StyledNavBookmarks,
  StyledNavProfile,
} from "./Footer.styled";
import { useSession } from "next-auth/react";
import Drawer from "@/components//Drawer";
import { useState } from "react";

export default function Footer() {
  const [drawerIsActive, setDrawerIsActive] = useState(false);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }

  const toggleDrawer = () => {
    setDrawerIsActive(!drawerIsActive);
  };
  const closeDrawer = () => {
    setDrawerIsActive(false);
  };

  if (session) {
    return (
      <>
        <StyledFooter>
          <StyledNavHome />
          <StyledNavNearby />
          <StyledNavNew onClick={toggleDrawer} color={"var(--color-primary)"} />
          <StyledNavBookmarks />
          <StyledNavProfile />
        </StyledFooter>
        {drawerIsActive && <Drawer closeDrawer={closeDrawer} />}
      </>
    );
  } else {
    return (
      <StyledFooter>
        <StyledNavLogin />
      </StyledFooter>
    );
  }
}
