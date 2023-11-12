import { StyledPoiCard } from "./PoiCard.styled";

export default function PoiCard({ poi }) {
  return (
    <StyledPoiCard>
      <h2>{poi.properties.name}</h2>
      <p>
        {poi.location.adress.street} {poi.location.adress.housenumber}
      </p>
      <ul>
        Sportarten:
        {poi.properties.sports.map((sport, index) => {
          const key = `${index}${sport}`;
          return <li key={key}>{sport}</li>;
        })}
      </ul>
      <ul>
        Geräte:
        {poi.properties.devices.map((device, index) => {
          const key = `${index}${device}`;
          return <li key={key}>{device}</li>;
        })}
      </ul>
    </StyledPoiCard>
  );
}
