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
            <StyledCardTabItemLabel
              onClick={() => {
                setActiveTab("info");
              }}
            >
              Info
            </StyledCardTabItemLabel>
          </StyledCardTabItem>
          <StyledCardTabItem>
            <StyledCardTabItemLabel
              onClick={() => {
                setActiveTab("chat");
              }}
            >
              Chat
            </StyledCardTabItemLabel>
          </StyledCardTabItem>
          <StyledCardTabItem>
            <StyledCardTabItemLabel
              onClick={() => {
                setActiveTab("image");
              }}
            >
              Fotos
            </StyledCardTabItemLabel>
          </StyledCardTabItem>
        </StyledCardTabSwitch>
        {activeTab === "info" && (
          <>
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
          </>
        )}
        {activeTab === "chat" && <span>Chat is here</span>}
        {activeTab === "image" && <span>Fotos are here</span>}
      </StyledCardListContainer>
    </StyledPoiCard>
  );
}
