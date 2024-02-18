import styled from "styled-components";
import FooterNavLogin from "../../src/nav-login.svg";
import FooterNavPlaceholder from "../../src/nav-placeholder.svg";
import FooterNavHome from "../../src/nav-home.svg";
import FooterNavNearby from "../../src/nav-location.svg";
import FooterNavNew from "../../src/nav-new.svg";
import FooterNavBokmarks from "../../src/nav-bookmark.svg";
import FooterNavProfile from "../../src/nav-profile.svg";
import Router from "next/router";
import { signIn } from "next-auth/react";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-gray3);
  display: flex;
  justify-content: space-around;
`;

const FooterLogin = () => (
  <StyledNavLoginContainer onClick={() => signIn()}>
    <FooterNavLogin />
    <StyledNavLoginText>Login für alle Funktionen</StyledNavLoginText>
  </StyledNavLoginContainer>
);
export const StyledNavLoginContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const StyledNavLogin = styled(FooterLogin)`
  font-size: 50px;
`;
export const StyledNavLoginText = styled.p`
  font-size: 20px;
  margin: auto;
`;

const FooterPlaceholder = () => <FooterNavPlaceholder />;
export const StyledPlaceholder = styled(FooterPlaceholder)`
  font-size: 50px;
`;

const FooterHome = () => <FooterNavHome onClick={() => Router.push("/")} />;
export const StyledNavHome = styled(FooterHome)`
  font-size: 50px;
`;

const FooterNearby = () => <FooterNavNearby onClick={() => Router.push("/")} />;
export const StyledNavNearby = styled(FooterNearby)`
  font-size: 50px;
`;

const FooterNew = ({ color }) => (
  <FooterNavNew
    onClick={() => console.log("new POI")}
    fill={color ? `${color}` : "var(--color-gray3)"}
  />
);
export const StyledNavNew = styled(FooterNew)`
  font-size: 50px;
  ${(props) => props.$fill && `fill: ${props.$fill};`};
`;

const FooterBookmarks = () => (
  <FooterNavBokmarks onClick={() => Router.push("/bookmarks")} />
);
export const StyledNavBookmarks = styled(FooterBookmarks)`
  font-size: 50px;
`;

const FooterProfile = () => (
  <FooterNavProfile onClick={() => Router.push("/profile")} />
);
export const StyledNavProfile = styled(FooterProfile)`
  font-size: 50px;
`;
