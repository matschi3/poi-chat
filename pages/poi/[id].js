import { useRouter } from "next/router";
import PoiCard from "@/components/PoiCard";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

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

  if (loading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <Header title={"POI"} backButton />
      <PoiCard poi={poi} />
    </>
  );
}
