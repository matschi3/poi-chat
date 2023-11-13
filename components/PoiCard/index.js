import {
  StyledPoiCard,
  StyledCardImage,
  StyledCardHeading,
  StyledCardDescription,
  StyledCardAdress,
  StyledCardListContainer,
  StyledCardUl,
} from "./PoiCard.styled";

export default function PoiCard({ poi }) {
  return (
    <StyledPoiCard>
      <StyledCardImage />
      <StyledCardHeading>{poi.properties.name}</StyledCardHeading>
      <StyledCardDescription>
        {poi.properties.description}
      </StyledCardDescription>
      <StyledCardAdress>
        {poi.location.adress.street} {poi.location.adress.housenumber}
      </StyledCardAdress>
      <StyledCardListContainer>
        <StyledCardUl>
          Sportarten:
          {poi.properties.sports.map((sport, index) => {
            const key = `${index}${sport}`;
            return <li key={key}>{sport}</li>;
          })}
        </StyledCardUl>
        <ul>
          Geräte:
          {poi.properties.devices.map((device, index) => {
            const key = `${index}${device}`;
            return <li key={key}>{device}</li>;
          })}
        </ul>
      </StyledCardListContainer>
    </StyledPoiCard>
  );
}
