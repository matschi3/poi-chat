import styled from "styled-components";
import { ReactComponent as FooterPlaceholder } from "@public/nav-placeholder.svg";
import { ReactComponent as FooterNavProfile } from "@public/nav-profile.svg";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-gray3);
`;

export const StyledPlaceholder = styled(FooterPlaceholder)``;

export const StyledNavProfile = styled(FooterNavProfile)``;
