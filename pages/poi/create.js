import PoiForm from "@/components/PoiForm/index.js";

export default function CreatePoiPage() {
  async function createPoi(newPoi) {
    console.log(newPoi);
    const response = await fetch("/api/pois", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPoi),
    });
    if (response.ok) {
      console.log("Poi created successfully");
    }
  }

  return <PoiForm onSubmit={createPoi} formName="create-poi" />;
}
