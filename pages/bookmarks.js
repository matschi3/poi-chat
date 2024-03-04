import Head from "next/head";
import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function BookmarkPage() {
  const [pois, setPois] = useState([]);
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    async function fetchPois() {
      const response = await fetch("/api/pois");
      const fetchedPois = await response.json();
      setPois(fetchedPois);
    }
    async function fetchUserFavorites() {
      const response = await fetch(`/api/user/favorites/${userEmail}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const favs = await response.json();
        setFavoriteIds(favs);
      } else {
        return;
      }
    }
    if (!session) {
      router.replace("/");
    } else if (session) {
      setUserEmail(session?.user.email);
      fetchPois();
      if (userEmail !== "") {
        fetchUserFavorites();
      }
    }
  }, [session, router, userEmail]);

  if (status === "loading") {
    return null;
  }

  const toggleSearch = () => {
    setSearchIsActive(!searchIsActive);
  };
  const handleSearch = (value) => {
    setSearchQuery(value);
  };
  const clearSearch = () => {
    setSearchQuery("");
  };

  const renderedPois = searchIsActive
    ? pois.filter((poi) =>
        poi.properties?.[0]?.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : pois;

  return (
    <>
      <Head>
        <title>POI-Chat // Favorite POIs</title>
        <meta
          name="description"
          content="Chat with like-minded and get connected right at your Point of Interest - List of personal favorite Points of Interest"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title={"Favorites"}
        leftButton={{ onClick: toggleSearch, text: "Suche" }}
      />
      <main>
        {searchIsActive && (
          <Search
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            clearSearch={clearSearch}
          />
        )}
        <StyledBlockContainer $searchIsActive={searchIsActive}>
          {pois.length < 1 ? (
            <h2>Loading</h2>
          ) : renderedPois.length < 1 ? (
            <h2>Keine POIs gefunden</h2>
          ) : (
            renderedPois.map((poi) => <PoiBlock key={poi._id} poi={poi} />)
          )}
        </StyledBlockContainer>
      </main>
      <Footer />
    </>
  );
}
