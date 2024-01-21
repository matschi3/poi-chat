export default function CreatePoiPage() {
  async function createPoi(newPoi) {
    const response = await fetch("api/pois", {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(newPoi),
    });
    if (response.ok) {
      console.log("Poi created successfully");
    }
  }

  return <></>;
}