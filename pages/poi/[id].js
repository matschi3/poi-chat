import { pois } from "@/lib/pois";
import { useRouter } from "next/router";
import PoiCard from "@/components/PoiCard";

export default function PoiDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const poi = pois.find((poi) => poi.id === id);
  return <PoiCard poi={poi} />;
}
