import Head from "next/head";
import { StyledHeader, HeaderTitle } from "./Header.styled";

export default function Header({ title }) {
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
        <HeaderTitle>{title}</HeaderTitle>
      </StyledHeader>
    </>
  );
}
