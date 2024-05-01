import Head from "next/head";
import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";
import { useState } from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";
import AddButton from "@/components/AddButton";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Home() {
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerIsActive, setDrawerIsActive] = useState(false);

  const { data: poiData, isLoading, error } = useSWR("/api/pois");

  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading POIs</div>;

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

  const filteredPois = searchIsActive
    ? poiData?.filter((poi) =>
        poi.properties?.[0]?.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : poiData;

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
          {poiData?.length < 1 ? (
            <h2>Loading</h2>
          ) : (
            filteredPois?.map((poi) => <PoiBlock key={poi._id} poi={poi} />)
          )}
        </StyledBlockContainer>
        {!session ? (
          <>
            {drawerIsActive && <Drawer closeDrawer={closeDrawer} />}
            {!drawerIsActive && <AddButton onClick={openDrawer} />}
          </>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}
