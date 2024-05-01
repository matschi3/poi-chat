import dbConnect from "../../../db/connect.js";
import Poi from "../../../db/models/Poi.js";
import { getToken } from "next-auth/jwt";
import { dummyPois } from "@/lib/pois.js";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  const { id } = request.query;
  if (token) {
    await dbConnect();
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
          populate: [
            { path: "devicesAccessible", populate: { path: "assets" } },
          ],
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
    } else if (request.method === "DELETE") {
      const deletedPoi = await Poi.findByIdAndDelete(id);
      if (!deletedPoi) {
        return response.status(404).json({ message: "No POI found" });
      }
      return response.status(200).json(deletedPoi);
    }
    return response.status(405).json({ status: "Method not allowed" });
  } else {
    if (request.method === "GET") {
      const dummyPoi = dummyPois.find((poi) => poi._id === id);
      return response.status(200).json(dummyPoi);
    }
    return response
      .status(401)
      .json({ message: "Unauthorized access. Please log in." });
  }
}
