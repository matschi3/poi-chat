import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserLogin from "@/components/UserLogin";

export default function RegisterPage() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <Head>
        <title>POI-Chat // Registation</title>
        <meta
          name="description"
          content="Chat with like-minded and get connected right at your Point of Interest - Register new Account Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={"Registration"} backButton />
      <UserLogin purpose="register" />
      <Footer />
    </>
  );
}
