import dbConnect from "../../../db/connect.js";
import Poi from "../../../db/models/Poi.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const poi = await Poi.findById(id)
      .populate({
        path: "categories",
        populate: { path: "assets" },
      })
      .populate({
        path: "location",
        populate: [{ path: "geometry" }, { path: "adress" }],
      })
      .populate({
        path: "properties",
        populate: [{ path: "devicesAccessible", populate: { path: "assets" } }],
      })
      .populate({
        path: "activities",
        populate: [
          { path: "devices", populate: { path: "assets" } },
          { path: "sports", populate: { path: "assets" } },
        ],
      })
      .populate({
        path: "assets",
        populate: { path: "images" },
      })
      .populate("events");
    if (!poi) {
      return response.status(404).json({ message: "No POI found" });
    }
    return response.status(200).json(poi);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
