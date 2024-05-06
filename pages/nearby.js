import Map from "@/components/Map";
import useSWR from "swr";

export default function NearbyPage() {
  const { data: poiData, isLoading, error } = useSWR("/api/pois");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading POIs</div>;

  //create markers array
  const markers = poiData
    .map((poi) => {
      if (poi.location[0].geometry[0].coordinates[1]) {
        return {
          lat: poi.location[0].geometry[0].coordinates[1].toString(),
          lng: poi.location[0].geometry[0].coordinates[0].toString(),
          name: poi.properties[0].name,
          id: poi._id,
        };
      } else {
        return undefined;
      }
    })
    .filter((marker) => marker !== undefined);
  return <Map markers={markers} />;
}
