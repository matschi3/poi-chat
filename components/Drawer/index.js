import { DrawerContainer, StyledDrawer, DrawerButton } from "./Drawer.styled";
import Router from "next/router";

export default function Drawer({ closeDrawer }) {
  return (
    <DrawerContainer>
      <StyledDrawer>
        <DrawerButton onClick={closeDrawer} $closeBtn>
          Schliessen / Zurück
        </DrawerButton>
        <DrawerButton onClick={() => Router.push("/poi/create")}>
          + <abbr>POI</abbr> erstellen +
        </DrawerButton>
      </StyledDrawer>
    </DrawerContainer>
  );
}
