import dbConnect from "../../../db/connect.js";
import Activity from "../../../db/models/Activity.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const activities = await Activity.find({})
      .populate({
        path: "devices",
        populate: [{ path: "assets", populate: { path: "images" } }],
      })
      .populate({
        path: "sports",
        populate: [{ path: "assets", populate: { path: "images" } }],
      });
    if (!activities) {
      return response.status(404).json({ message: "No activities found" });
    }
    return response.status(200).json(activities);
  }
  if (request.method === "POST") {
    try {
      const newActivity = request.body;
      await Activity.create(newActivity);
      return response.status(201).json({ status: "Activity created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (!deletedActivity) {
      return response.status(404).json({ message: "No Activity found" });
    }
    return response.status(200).json(deletedActivity);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
