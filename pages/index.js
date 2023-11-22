import Head from "next/head";
import { pois } from "@/lib/pois";
import PoiBlock from "@/components/PoiBlock/index.js";
import { StyledBlockContainer } from "@/components/PoiBlock/PoiBlock.styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>POI-Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <StyledBlockContainer>
          {pois.map((poi) => {
            return <PoiBlock key={poi.id} poi={poi} />;
          })}
        </StyledBlockContainer>
      </main>
    </>
  );
}
