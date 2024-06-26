import dbConnect from "../../../db/connect.js";
import Asset from "../../../db/models/Asset.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    await dbConnect();
    if (request.method === "GET") {
      const assets = await Asset.find({}).populate("images");
      if (!assets) {
        return response.status(404).json({ message: "No assets found" });
      }
      return response.status(200).json(assets);
    }
    if (request.method === "POST") {
      try {
        const newAsset = request.body;
        await Asset.create(newAsset);
        return response.status(201).json({ status: "Asset created." });
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
