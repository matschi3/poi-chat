import { useRouter } from "next/router";
import PoiCard from "@/components/PoiCard";
import { useState, useEffect } from "react";

export default function PoiDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const poi = pois.find((poi) => poi.id === id);
  return <PoiCard poi={poi} />;
}
