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
      const foundGeometry = geometryData.find((geometryObject) => {
        return geometryObject.uuid === uuid;
      });
      if (foundGeometry) {
        setGeometry(foundGeometry._id);
      }
    }
  }

  async function createPoi(newPoi) {
    console.log("newPoi", newPoi);
    /* geometry */
    if (newPoi.location[0].geometry[0] === "n/a") {
      setGeometry([]);
    } else {
      const newPoiGeometry = newPoi.location[0].geometry[0];
      await createGeometry(newPoiGeometry);
      await fetchGeometryId(newPoiGeometry.uuid);
    }
    /* POST newPoiToDb */
    const response = await fetch("/api/pois", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPoiToDb),
    });
    if (response.ok) {
      console.log("Poi created successfully");
    }
  }

  return <PoiForm onSubmit={createPoi} formName="create-poi" />;
}
