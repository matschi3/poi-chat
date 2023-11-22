import dbConnect from "../../../db/connect.js";
import Poi from "../../../db/models/Poi.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const pois = await Poi.find({}).populate({
      path: "parts",
      populate: { path: "category" },
    });
    if (!pois) {
      return response.status(404).json({ message: "No POIs found" });
    }
    return response.status(200).json(pois);
  }
  if (request.method === "POST") {
    try {
      const newItem = request.body;
      await Item.create(newItem);
      return response.status(201).json({ status: "Item created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
