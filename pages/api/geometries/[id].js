import dbConnect from "../../../db/connect.js";
import Geometry from "../../../db/models/Geometry.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const geometry = await Geometry.find({}).populate("coordinates");
    if (!geometry) {
      return response.status(404).json({ message: "No geometry found" });
    }
    return response.status(200).json(geometry);
  } else if (request.method === "DELETE") {
    const deletedGeometry = await Geometry.findByIdAndDelete(id);
    if (!deletedGeometry) {
      return response.status(404).json({ message: "No Geometry found" });
    }
    return response.status(200).json(deletedGeometry);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
