import dbConnect from "../../../db/connect.js";
import Category from "../../../db/models/Category.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const category = await Category.find(id)
      .populate("assets")
      .populate({
        path: "assets",
        populate: { path: "images" },
      });
    if (!category) {
      return response.status(404).json({ message: "No category found" });
    }
    return response.status(200).json(category);
  } else if (request.method === "DELETE") {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return response.status(404).json({ message: "No Category found" });
    }
    return response.status(200).json(deletedCategory);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
