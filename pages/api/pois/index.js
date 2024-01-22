import dbConnect from "../../../db/connect.js";
import Poi from "../../../db/models/Poi.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const pois = await Poi.find({})
      .populate({
        path: "categories",
        populate: { path: "assets" },
      })
      .populate({
        path: "location",
        populate: [{ path: "geometry" }, { path: "adress" }],
      })
      .populate("properties")
      .populate({
        path: "properties",
        populate: { path: "devicesAccessible" },
      })
      .populate("activities")
      .populate({
        path: "activities",
        populate: [{ path: "devices" }, { path: "sports" }],
      })
      .populate("assets")
      .populate({
        path: "assets",
        populate: { path: "images" },
      })
      .populate("events");
    if (!pois) {
      return response.status(404).json({ message: "No POIs found" });
    }
    return response.status(200).json(pois);
  }
  if (request.method === "POST") {
    try {
      const newPoi = request.body;
      await Poi.create(newPoi);
      return response.status(201).json({ status: "POI created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
