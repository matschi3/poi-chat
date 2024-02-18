import styled from "styled-components";
import FooterNavLogin from "../../src/nav-login.svg";
import FooterNavPlaceholder from "../../src/nav-placeholder.svg";
import FooterNavHome from "../../src/nav-home.svg";
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

const FooterProfile = () => (
  <FooterNavProfile onClick={() => Router.push("/profile")} />
);

export const StyledNavProfile = styled(FooterProfile)`
  font-size: 50px;
`;
