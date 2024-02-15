import styled from "styled-components";
import { ReactComponent as FooterNavProfile } from "../../src/nav-profile.svg";
import { ReactComponent as FooterPlaceholder } from "../../src/nav-placeholder.svg";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-gray3);
`;

export const StyledPlaceholder = styled(FooterPlaceholder)`
  font-size: 50px;
`;

export const StyledNavProfile = styled(FooterNavProfile)`
  font-size: 50px;
`;
