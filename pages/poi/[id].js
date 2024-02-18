import Head from "next/head";
import { useRouter } from "next/router";
import PoiCard from "@/components/PoiCard";
import {
  StyledPoiCard,
  StyledCardHeadingContainer,
  StyledCardHeading,
} from "@/components/PoiCard/PoiCard.styled";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoiDetailPage() {
  const [poi, setPoi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchPoi(id) {
      try {
        const response = await fetch(`/api/pois/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch POI. Check correct url");
        }
        const fetchedPoi = await response.json();
        setPoi(fetchedPoi);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    if (id) {
      fetchPoi(id);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>POI-Chat // POI</title>
        <meta
          name="description"
          content="Chat with like-minded and get connected right at your Point of Interest - Details of chosen Point of Interest"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={"POI"} backButton />
      {loading ? (
        <StyledPoiCard>
          <StyledCardHeadingContainer>
            <StyledCardHeading>Loading</StyledCardHeading>
          </StyledCardHeadingContainer>
        </StyledPoiCard>
      ) : error ? (
        <StyledPoiCard>
          <StyledCardHeadingContainer>
            <StyledCardHeading>Error: {error}</StyledCardHeading>
          </StyledCardHeadingContainer>
        </StyledPoiCard>
      ) : (
        <PoiCard poi={poi} />
      )}
      <Footer />
    </>
  );
}
