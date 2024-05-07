import Map from "@/components/Map";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";

export default function NearbyPage() {
  const [userPosition, setUserPosition] = useState(null);
  const { data: poiData, isLoading, error } = useSWR("/api/pois");
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const { data: userCoordinates } = useSWR(
    userEmail ? `/api/user/coordinates/${userEmail}` : null
  );

  useEffect(() => {
    if (userCoordinates) {
      setUserPosition(userCoordinates?.lastCoordinates);
    }
  }, [userCoordinates]);

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

  function getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          getCurrentPosition();
        }}
      >
        {userPosition === userCoordinates?.lastCoordinates
          ? "Aktuellen Standort verwenden"
          : "Standort verwendet! Aktualisieren."}
      </button>
      <Map mapCenter={userPosition} markers={markers} />
    </>
  );
}
