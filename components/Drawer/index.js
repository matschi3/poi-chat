import { DrawerContainer, StyledDrawer, DrawerButton } from "./Drawer.styled";

export default function Drawer({ closeDrawer }) {
  return (
    <DrawerContainer>
      <StyledDrawer>
        <DrawerButton onClick={closeDrawer} $closeBtn>
          Schliessen / Zurück
        </DrawerButton>
        <DrawerButton>
          + <abbr>POI</abbr> erstellen +
        </DrawerButton>
      </StyledDrawer>
    </DrawerContainer>
  );
}
