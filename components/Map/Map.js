import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledMap } from "./Map.styled";
import { useRouter } from "next/router";
import L from "leaflet";
import retina from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useRef } from "react";

export default function Map({ mapCenter, markers }) {
  const router = useRouter();
  const mapRef = useRef(null);

  useEffect(() => {
    // Re-center the map when `mapCenter` changes
    if (mapRef.current) {
      mapRef.current.setView([mapCenter.lat, mapCenter.lng], 13);
    }
  }, [mapCenter]);

  // Default map center for undefined (when no user location is available on db)
  const mapCenterArray =
    mapCenter?.lat === undefined
      ? [50.7356878, 7.1006226, 21]
      : [mapCenter.lat, mapCenter.lng];

  // Fix for broken marker icons
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: retina.src,
    iconUrl: icon.src,
    shadowUrl: shadow.src,
  });

  return (
    <StyledMap>
      <MapContainer
        ref={mapRef}
        className="mymap"
        center={mapCenterArray}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        {markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]} alt="🛝">
            <Popup>
              {marker.name}{" "}
              <p onClick={() => router.push(`/poi/${marker.id}`)}>Zur Seite</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </StyledMap>
  );
}
