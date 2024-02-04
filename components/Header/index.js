import Head from "next/head";
import Router from "next/router";
import {
  StyledHeader,
  HeaderTitle,
  HeaderLeft,
  HeaderRight,
  BackButton,
} from "./Header.styled";

export default function Header({ title }) {
  const handleBack = () => {
    Router.back();
  };
  return (
    <>
      <Head>
        <title>POI-Chat // {title}</title>
        <meta
          name="description"
          content="Chat with like-minded an get connected right at your Point of Interest"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHeader>
        <HeaderLeft>
          <BackButton onClick={handleBack}>Zurück</BackButton>
        </HeaderLeft>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderRight></HeaderRight>
      </StyledHeader>
    </>
  );
}
