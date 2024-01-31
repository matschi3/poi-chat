import dbConnect from "../../../db/connect.js";
import Geometry from "../../../db/models/Geometry.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const geometries = await Geometry.find({}).populate("coordinates");
    if (!geometries) {
      return response.status(404).json({ message: "No geometries found" });
    }
    return response.status(200).json(geometries);
  }
  if (request.method === "POST") {
    try {
      const newGeometry = request.body;
      await Geometry.create(newGeometry);
      return response.status(201).json({ status: "Geometry created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
