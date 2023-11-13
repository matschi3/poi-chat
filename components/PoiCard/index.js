import {
  StyledPoiCard,
  StyledCardImage,
  StyledCardHeading,
  StyledCardDescription,
  StyledCardAdress,
  StyledCardListContainer,
  StyledCardUl,
  StyledCardLi,
  StyledCardLiDot,
} from "./PoiCard.styled";
import { StyledBlockDivider } from "../PoiBlock/PoiBlock.styled";

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
          Sportarten
          {poi.activities.sports.map((sport, index) => {
            const key = `${index}${sport}`;
            return (
              <>
                <StyledCardLi key={key}>
                  {sport}
                  <StyledCardLiDot />
                </StyledCardLi>
                <StyledBlockDivider />
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
