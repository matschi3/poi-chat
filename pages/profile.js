import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session, router]);

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
        {!session && <></>}
        {session && (
          <div>
            <p>
              Willkommen zurück
              {session.user.name ? `, ${session.user.name}!` : "!"}
            </p>
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
