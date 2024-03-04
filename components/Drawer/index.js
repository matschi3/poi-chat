import {
  DrawerContainer,
  DrawerFocus,
  StyledDrawer,
  DrawerButton,
} from "./Drawer.styled";
import Router from "next/router";
import { useSession, signIn } from "next-auth/react";

export default function Drawer({ closeDrawer }) {
  const { data: session } = useSession();
  return (
    <>
      <DrawerContainer>
        <StyledDrawer>
          <DrawerButton onClick={closeDrawer} $closeBtn>
            Schliessen / Zurück
          </DrawerButton>
          {session && (
            <DrawerButton onClick={() => Router.push("/poi/create")}>
              + <abbr>POI</abbr> erstellen +
            </DrawerButton>
          )}
          {!session && (
            <DrawerButton onClick={signIn}>
              LOGIN um POI zu erstellen
            </DrawerButton>
          )}
        </StyledDrawer>
      </DrawerContainer>
      <DrawerFocus onClick={closeDrawer} />
    </>
  );
}
