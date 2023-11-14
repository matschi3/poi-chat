import {
  StyledPoiCard,
  StyledCardImage,
  StyledCardHeadingContainer,
  StyledCardHeading,
  StyledCardDescription,
  StyledCardAdress,
  StyledCardListContainer,
  StyledCardTabSwitch,
  StyledCardTabItem,
  StyledCardTabItemLabel,
  StyledCardUl,
  StyledCardLi,
  StyledCardLiDot,
  StyledCardLiIndication,
  StyledCardDivider,
} from "./PoiCard.styled";
import { useState } from "react";

export default function PoiCard({ poi }) {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <StyledPoiCard>
      <StyledCardImage />
      <StyledCardHeadingContainer>
        <StyledCardHeading>{poi.properties.name}</StyledCardHeading>
        <StyledCardDescription>
          {poi.properties.description}
        </StyledCardDescription>
      </StyledCardHeadingContainer>
      <StyledCardListContainer>
        <StyledCardTabSwitch>
          <StyledCardTabItem>
            <StyledCardTabItemLabel>Info</StyledCardTabItemLabel>
          </StyledCardTabItem>
          <StyledCardTabItem>
            <StyledCardTabItemLabel>Chat</StyledCardTabItemLabel>
          </StyledCardTabItem>
          <StyledCardTabItem>
            <StyledCardTabItemLabel>Fotos</StyledCardTabItemLabel>
          </StyledCardTabItem>
        </StyledCardTabSwitch>

        <StyledCardAdress>
          {poi.location.adress.street} {poi.location.adress.housenumber}
        </StyledCardAdress>
        <StyledCardUl>
          Sportarten
          {poi.activities.sports.map((sport, index) => {
            const key = `${index}${sport}`;
            return (
              <>
                <StyledCardLi key={key}>
                  {sport}
                  <StyledCardLiDot />
                  <StyledCardLiIndication>sport</StyledCardLiIndication>
                </StyledCardLi>
                <StyledCardDivider />
              </>
            );
          })}
        </StyledCardUl>
        <StyledCardUl>
          Geräte
          {poi.activities.devices.map((device, index) => {
            const key = `${index}${device}`;
            return (
              <>
                <StyledCardLi key={key}>
                  {device}
                  <StyledCardLiDot />
                  <StyledCardLiIndication>device</StyledCardLiIndication>
                </StyledCardLi>
                <StyledCardDivider />
              </>
            );
          })}
        </StyledCardUl>
      </StyledCardListContainer>
    </StyledPoiCard>
  );
}
