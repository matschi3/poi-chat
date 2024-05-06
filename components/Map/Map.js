import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { StyledMap } from "./Map.styled";
import { useRouter } from "next/router";

export default function Map({ markers }) {
  const router = useRouter();
  return (
    <StyledMap>
      <MapContainer
        className="mymap"
        center={[50.74238760309213, 7.103948755048992]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>
        {markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
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
