import dbConnect from "../../../db/connect.js";
import Device from "../../../db/models/Device.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    await dbConnect();
    if (request.method === "GET") {
      const devices = await Device.find({})
        .populate("assets")
        .populate({
          path: "assets",
          populate: { path: "images" },
        });
      if (!devices) {
        return response.status(404).json({ message: "No devices found" });
      }
      return response.status(200).json(devices);
    }
    if (request.method === "POST") {
      try {
        const newDevice = request.body;
        await Device.create(newDevice);
        return response.status(201).json({ status: "Device created." });
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
