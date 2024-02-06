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
import React, { useState } from "react";
import Router from "next/router";

export default function PoiCard({ poi }) {
  const [activeTab, setActiveTab] = useState("info");

  async function deleteActivity(activityId) {
    const response = await fetch(`/api/activities/${activityId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete Activity. Check correct url");
    }
  }
  async function deleteCategory(categoryId) {
    const response = await fetch(`/api/categories/${categoryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete Category. Check correct url");
    }
  }
  async function deleteAdress(adressId) {
    const response = await fetch(`/api/adresses/${adressId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete Adress. Check correct url");
    }
  }
  async function deleteGeometry(geometryId) {
    const response = await fetch(`/api/geometries/${geometryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete Geometry. Check correct url");
    }
  }
  async function deleteLocation(locationId) {
    const response = await fetch(`/api/locations/${locationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete Location. Check correct url");
    }
  }
  async function deleteProperty(propertyId) {
    const response = await fetch(`/api/properties/${propertyId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete Property. Check correct url");
    }
  }

  async function deletePoi() {
    const iDsToDelete = {
      activityId: poi.activities[0]._id,
      categoryId: poi.categories[0]._id,
      adressId: poi.location[0].adress[0]._id,
      geometryId: poi.location[0].geometry[0]._id,
      locationId: poi.location[0]._id,
      propertyId: poi.properties[0]._id,
    };
    await deleteActivity(iDsToDelete.activityId);
    await deleteCategory(iDsToDelete.categoryId);
    await deleteAdress(iDsToDelete.adressId);
    await deleteGeometry(iDsToDelete.geometryId);
    await deleteLocation(iDsToDelete.locationId);
    await deleteProperty(iDsToDelete.propertyId);

    const response = await fetch(`/api/pois/${poi._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete POI. Check correct url");
    }
    Router.push("/");
  }

  return (
    <StyledPoiCard>
      <StyledBackground />
      <StyledCardImage />
      <StyledCardHeadingContainer>
        <StyledCardHeading>{poi.properties[0].name}</StyledCardHeading>
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
              {poi.location[0].adress[0].street}{" "}
              {poi.location[0].adress[0].housenumber}{" "}
              {poi.location[0].adress[0].postcode}{" "}
              {poi.location[0].adress[0].city}
            </StyledCardAdress>
            <StyledCardAdress>
              {poi.location[0].hint ? poi.location[0].hint : ""}
            </StyledCardAdress>
            <StyledCardUl>
              Sportarten
              {poi.activities[0].sports.map((sport, index) => {
                return (
                  <React.Fragment key={`sport-${index}-${sport.name}`}>
                    <StyledCardLi>
                      {sport.name}
                      <StyledCardLiDot />
                      <StyledCardLiIndication>sport</StyledCardLiIndication>
                    </StyledCardLi>
                    <StyledCardDivider />
                  </React.Fragment>
                );
              })}
            </StyledCardUl>
            <StyledCardUl>
              Geräte
              {poi.activities[0].devices.map((device, index) => {
                return (
                  <React.Fragment key={`device-${index}-${device.name}`}>
                    <StyledCardLi>
                      {device.name}
                      <StyledCardLiDot />
                      <StyledCardLiIndication>device</StyledCardLiIndication>
                    </StyledCardLi>
                    <StyledCardDivider />
                  </React.Fragment>
                );
              })}
            </StyledCardUl>
            <button onClick={deletePoi}>Delete</button>
          </>
        )}
        {activeTab === "chat" && <span>Chat is here</span>}
        {activeTab === "image" && <span>Fotos are here</span>}
      </StyledCardListContainer>
    </StyledPoiCard>
  );
}
