import styled from "styled-components";
import FooterNavPlaceholder from "../../src/nav-placeholder.svg";
import FooterNavProfile from "../../src/nav-profile.svg";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: var(--header-height);
  background-color: var(--color-gray3);
  display: flex;
  justify-content: space-around;
`;

const FooterPlaceholder = () => <FooterNavPlaceholder />;

export const StyledPlaceholder = styled(FooterPlaceholder)`
  font-size: 50px;
`;

const FooterProfile = () => <FooterNavProfile />;

export const StyledNavProfile = styled(FooterProfile)`
  font-size: 50px;
`;
