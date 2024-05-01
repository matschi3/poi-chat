import dbConnect from "../../../db/connect.js";
import Event from "../../../db/models/Event.js";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    await dbConnect();
    if (request.method === "GET") {
      const events = await Event.find({});
      if (!events) {
        return response.status(404).json({ message: "No events found" });
      }
      return response.status(200).json(events);
    }
    if (request.method === "POST") {
      try {
        const newEvent = request.body;
        await Event.create(newEvent);
        return response.status(201).json({ status: "Event created." });
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
