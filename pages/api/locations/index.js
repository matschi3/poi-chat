import dbConnect from "../../../db/connect.js";
import Location from "../../../db/models/Location.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const locations = await Location.find({})
      .populate({
        path: "geometry",
        populate: { path: "coordinates" },
      })
      .populate("adress");
    if (!locations) {
      return response.status(404).json({ message: "No locations found" });
    }
    return response.status(200).json(locations);
  }
  if (request.method === "POST") {
    try {
      const newLocation = request.body;
      await Location.create(newLocation);
      return response.status(201).json({ status: "Location created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    const deletedLocation = await Location.findByIdAndDelete(id);
    if (!deletedLocation) {
      return response.status(404).json({ message: "No Location found" });
    }
    return response.status(200).json(deletedLocation);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
