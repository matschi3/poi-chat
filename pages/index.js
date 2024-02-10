import Head from "next/head";
import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import AddButton from "@/components/AddButton";
import Drawer from "@/components/Drawer";

export default function Home() {
  const [pois, setPois] = useState([]);
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerIsActive, setDrawerIsActive] = useState(false);

  useEffect(() => {
    async function fetchPois() {
      const response = await fetch("/api/pois");
      const fetchedPois = await response.json();
      setPois(fetchedPois);
    }
    fetchPois();
  }, []);

  const toggleSearch = () => {
    setSearchIsActive(!searchIsActive);
  };
  const handleSearch = (value) => {
    setSearchQuery(value);
  };
  const clearSearch = () => {
    setSearchQuery("");
  };

  const openDrawer = () => {
    setDrawerIsActive(true);
  };
  const closeDrawer = () => {
    setDrawerIsActive(false);
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
        <title>POI-Chat // POIs</title>
        <meta
          name="description"
          content="Chat with like-minded and get connected right at your Point of Interest - List of all available Points of Interest"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title={"POIs"}
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
        {drawerIsActive && <Drawer closeDrawer={closeDrawer} />}
        {!drawerIsActive && <AddButton onClick={openDrawer} />}
      </main>
    </>
  );
}
