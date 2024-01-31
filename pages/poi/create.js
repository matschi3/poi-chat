import PoiForm from "@/components/PoiForm/index.js";
import { useState } from "react";

export default function CreatePoiPage() {
  const [geometry, setGeometry] = useState();

  async function createGeometry(geometry) {
    const response = await fetch("/api/geometries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geometry),
    });
    if (response.ok) {
      console.log("Geometry created successfully");
    }
  }
  async function fetchGeometryId(uuid) {
    const response = await fetch("/api/geometries", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const geometryData = await response.json();
      console.log("geometryData", geometryData);
      console.log("uuid", uuid);
      const foundGeometry = geometryData.find((geometryObject) => {
        return geometryObject.uuid === uuid;
      });
      if (foundGeometry) {
        console.log("foundGeometry", foundGeometry);
        setGeometry(foundGeometry._id);
      }
    }
  }

  async function createPoi(newPoi) {
    console.log("newPoi", newPoi);
    if (newPoi.location[0].geometry[0] === "n/a") {
      setGeometry([]);
    } else {
      const newPoiGeometry = newPoi.location[0].geometry[0];
      console.log("newPoiGeometry", newPoiGeometry);
      await createGeometry(newPoiGeometry);
      await fetchGeometryId(newPoiGeometry.uuid);
    }
    console.log("geometry in State", geometry);
    /* const response = await fetch("/api/pois", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPoi),
    });
    if (response.ok) {
      console.log("Poi created successfully");
    } */
  }

  return <PoiForm onSubmit={createPoi} formName="create-poi" />;
}
