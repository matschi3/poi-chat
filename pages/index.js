import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Search from "@/components/Search";

export default function Home() {
  const [pois, setPois] = useState([]);
  const [searchIsActive, setSearchIsActive] = useState(false);

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
  return (
    <>
      <Header
        title={"POIs"}
        leftButton={{ function: toggleSearch, text: "Suche" }}
      />
      <main>
        {searchIsActive && <Search />}
        <StyledBlockContainer searchIsActive={searchIsActive}>
          {pois.length < 1 ? (
            <h2>Loading</h2>
          ) : (
            pois.map((poi) => {
              return <PoiBlock key={poi._id} poi={poi} />;
            })
          )}
        </StyledBlockContainer>
      </main>
    </>
  );
}
