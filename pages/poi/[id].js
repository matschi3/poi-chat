import { useRouter } from "next/router";
import PoiCard from "@/components/PoiCard";
import { useState, useEffect } from "react";

export default function PoiDetailPage() {
  const [poi, setPoi] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    async function fetchPoi(id) {
      const response = await fetch(`/api/pois/${id}`);
      const fetchedPoi = await response.json();
      setPoi(fetchedPoi);
    }
    fetchPoi(id);
  }, [id]);
  if (poi.length < 1) {
    console.log(poi);
    return <h2>Loading</h2>;
  }
  return <PoiCard poi={poi} />;
}
