import dbConnect from "../../../db/connect.js";
import Activity from "../../../db/models/Activity.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const activity = await Activity.findById(id)
      .populate({
        path: "devices",
        populate: [{ path: "assets", populate: { path: "images" } }],
      })
      .populate({
        path: "sports",
        populate: [{ path: "assets", populate: { path: "images" } }],
      });
    if (!activity) {
      return response.status(404).json({ message: "No activity found" });
    }
    return response.status(200).json(activity);
  } else if (request.method === "DELETE") {
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return response.status(404).json({ message: "No Activity found" });
    }
    return response.status(200).json(deletedActivity);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
