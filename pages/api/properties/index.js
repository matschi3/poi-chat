import dbConnect from "../../../db/connect.js";
import Property from "../../../db/models/Property.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const properties = await Property.find({}).populate({
      path: "devicesAccessible",
      populate: [{ path: "assets", populate: { path: "images" } }],
    });
    if (!properties) {
      return response.status(404).json({ message: "No Propertys found" });
    }
    return response.status(200).json(properties);
  }
  if (request.method === "POST") {
    try {
      const newProperty = request.body;
      await Property.create(newProperty);
      return response.status(201).json({ status: "Property created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (!deletedProperty) {
      return response.status(404).json({ message: "No Property found" });
    }
    return response.status(200).json(deletedProperty);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
