import Router from "next/router";
import {
  StyledHeader,
  HeaderTitle,
  HeaderLeft,
  HeaderRight,
  Button,
} from "./Header.styled";

export default function Header({ title, leftButton, backButton }) {
  const handleBack = () => {
    Router.back();
  };
  return (
    <StyledHeader>
      <HeaderLeft>
        {leftButton && (
          <Button onClick={leftButton.onClick}>{leftButton.text}</Button>
        )}
        {backButton && <Button onClick={handleBack}>Zurück</Button>}
      </HeaderLeft>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderRight></HeaderRight>
    </StyledHeader>
  );
}
