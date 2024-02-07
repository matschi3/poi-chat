import Header from "@/components/Header";
import PoiForm from "@/components/PoiForm/index.js";

export default function CreatePoiPage() {
  async function createPoi(newPoi) {
    const response = await fetch("/api/pois", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPoi),
    });
    if (response.ok) {
      console.log("Poi created successfully");
    }
  }

  return (
    <>
      <Header title="POI erstellen" backButton />
      <PoiForm onSubmit={createPoi} formName="create-poi" />
    </>
  );
}
