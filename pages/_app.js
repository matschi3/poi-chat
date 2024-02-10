import GlobalStyle from "../styles.js";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
