import Head from "next/head";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserLogin from "@/components/UserLogin";

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <title>POI-Chat // Login</title>
        <meta
          name="description"
          content="Chat with like-minded and get connected right at your Point of Interest - Login Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={"Login"} backButton />
      <UserLogin purpose="login" />
    </>
  );
}
