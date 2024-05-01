import dbConnect from "../../../db/connect.js";
import Category from "../../../db/models/Category.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    await dbConnect();
    if (request.method === "GET") {
      const categories = await Category.find({})
        .populate("assets")
        .populate({
          path: "assets",
          populate: { path: "images" },
        });
      if (!categories) {
        return response.status(404).json({ message: "No categories found" });
      }
      return response.status(200).json(categories);
    }
    if (request.method === "POST") {
      try {
        const newCategory = request.body;
        await Category.create(newCategory);
        return response.status(201).json({ status: "Category created." });
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
