import {
  StyledPoiCard,
  StyledBackground,
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
      <StyledBackground />
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
              className={activeTab === "info" ? "isActiveTab" : ""}
              onClick={() => {
                setActiveTab("info");
              }}
            >
              Info
            </StyledCardTabItemLabel>
          </StyledCardTabItem>
          <StyledCardTabItem>
            <StyledCardTabItemLabel
              className={activeTab === "chat" ? "isActiveTab" : ""}
              onClick={() => {
                setActiveTab("chat");
              }}
            >
              Chat
            </StyledCardTabItemLabel>
          </StyledCardTabItem>
          <StyledCardTabItem>
            <StyledCardTabItemLabel
              className={activeTab === "image" ? "isActiveTab" : ""}
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
              {poi.location.adress.street} {poi.location.adress.housenumber},{" "}
              {poi.location.adress.postcode} {poi.location.adress.city}
            </StyledCardAdress>
            <StyledCardAdress>
              {poi.location.hint ? poi.location.hint : ""}
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
                    <StyledCardDivider key={"divider" + key} />
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
                    <StyledCardDivider key={"divider" + key} />
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
