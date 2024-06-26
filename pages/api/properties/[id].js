import dbConnect from "../../../db/connect.js";
import Property from "../../../db/models/Property.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    const { id } = request.query;
    await dbConnect();
    if (request.method === "GET") {
      const property = await Property.find(id).populate({
        path: "devicesAccessible",
        populate: [{ path: "assets", populate: { path: "images" } }],
      });
      if (!property) {
        return response.status(404).json({ message: "No Property found" });
      }
      return response.status(200).json(property);
    } else if (request.method === "DELETE") {
      const deletedProperty = await Property.findByIdAndDelete(id);
      if (!deletedProperty) {
        return response.status(404).json({ message: "No Property found" });
      }
      return response.status(200).json(deletedProperty);
    }
    return response.status(405).json({ status: "Method not allowed" });
  } else {
    return response
      .status(401)
      .json({ message: "Unauthorized access. Please log in." });
  }
}
