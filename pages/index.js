import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [pois, setPois] = useState([]);
  useEffect(() => {
    async function fetchPois() {
      const response = await fetch("/api/pois");
      const fetchedPois = await response.json();
      setPois(fetchedPois);
    }
    fetchPois();
  }, []);

  const testFnct = () => {
    console.log("it works!");
  };
  return (
    <>
      <Header
        title={"POIs"}
        leftButton={{ function: testFnct, text: "TestText" }}
      />
      <main>
        <StyledBlockContainer>
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
