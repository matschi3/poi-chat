import dbConnect from "../../../db/connect.js";
import Sport from "../../../db/models/Sport.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    await dbConnect();
    if (request.method === "GET") {
      const sports = await Sport.find({})
        .populate("assets")
        .populate({
          path: "assets",
          populate: { path: "images" },
        });
      if (!sports) {
        return response.status(404).json({ message: "No sports found" });
      }
      return response.status(200).json(sports);
    }
    if (request.method === "POST") {
      try {
        const newSport = request.body;
        await Sport.create(newSport);
        return response.status(201).json({ status: "Sport created." });
      } catch (error) {
        response.status(400).json({ error: error.message });
      }
    }
    return response.status(405).json({ status: "Method not allowed" });
  } else {
    return response
      .status(401)
      .json({ message: "Unauthorized access. Please log in." });
  }
}
