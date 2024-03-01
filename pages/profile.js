import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession, signOut } from "next-auth/react";
import Router from "next/router";

export default function ProfilePage() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>POI-Chat // Profile</title>
        <meta
          name="description"
          content="Chat with like-minded and get connected right at your Point of Interest - Personal Profile"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Mein Profil" backButton />
      <main>
        <h1>Profil</h1>
        {!session && (
          <div>
            <p>Bitte logge dich ein, um dein Profil zu sehen.</p>
            <button onClick={() => Router.push("/user/login")}>Login</button>
          </div>
        )}
        {session && (
          <div>
            <p>Willkommen zurück, {session.user.name}!</p>
            <p>Deine E-Mail-Adresse: {session.user.email}</p>
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
