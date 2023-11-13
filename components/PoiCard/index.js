import {
  StyledPoiCard,
  StyledCardImage,
  StyledCardHeadingContainer,
  StyledCardHeading,
  StyledCardDescription,
  StyledCardAdress,
  StyledCardListContainer,
  StyledCardUl,
  StyledCardLi,
  StyledCardLiDot,
  StyledCardLiIndication,
  StyledCardDivider,
} from "./PoiCard.styled";

export default function PoiCard({ poi }) {
  return (
    <StyledPoiCard>
      <StyledCardImage />
      <StyledCardHeadingContainer>
        <StyledCardHeading>{poi.properties.name}</StyledCardHeading>
        <StyledCardDescription>
          {poi.properties.description}
        </StyledCardDescription>
        <StyledCardAdress>
          {poi.location.adress.street} {poi.location.adress.housenumber}
        </StyledCardAdress>
      </StyledCardHeadingContainer>
      <StyledCardListContainer>
        <StyledCardUl>
          Sportarten
          {poi.activities.sports.map((sport, index) => {
            const key = `${index}${sport}`;
            return (
              <>
                <StyledCardLi key={key}>
                  {sport}
                  <StyledCardLiDot />
                  <StyledCardLiIndication>sports</StyledCardLiIndication>
                </StyledCardLi>
                <StyledCardDivider />
              </>
            );
          })}
        </StyledCardUl>
        <ul>
          Geräte
          {poi.activities.devices.map((device, index) => {
            const key = `${index}${device}`;
            return <li key={key}>{device}</li>;
          })}
        </ul>
      </StyledCardListContainer>
    </StyledPoiCard>
  );
}
