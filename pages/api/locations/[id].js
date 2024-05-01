import dbConnect from "../../../db/connect.js";
import Location from "../../../db/models/Location.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    const { id } = request.query;
    await dbConnect();
    if (request.method === "GET") {
      const location = await Location.find(id)
        .populate({
          path: "geometry",
          populate: { path: "coordinates" },
        })
        .populate("adress");
      if (!location) {
        return response.status(404).json({ message: "No location found" });
      }
      return response.status(200).json(location);
    } else if (request.method === "DELETE") {
      const deletedLocation = await Location.findByIdAndDelete(id);
      if (!deletedLocation) {
        return response.status(404).json({ message: "No Location found" });
      }
      return response.status(200).json(deletedLocation);
    }
    return response.status(405).json({ status: "Method not allowed" });
  } else {
    return response
      .status(401)
      .json({ message: "Unauthorized access. Please log in." });
  }
}
