import Head from "next/head";
import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";
import { useState, useEffect } from "react";

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
  return (
    <>
      <Head>
        <title>POI-Chat</title>
        <meta
          name="description"
          content="Chat with like-minded an get connected right at your Point of Interest"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
