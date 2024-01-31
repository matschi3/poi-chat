import dbConnect from "../../../db/connect.js";
import Adress from "../../../db/models/Adress.js";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const adresses = await Adress.find({});
    if (!adresses) {
      return response.status(404).json({ message: "No adresses found" });
    }
    return response.status(200).json(adresses);
  }
  if (request.method === "POST") {
    try {
      const newAdress = request.body;
      await Adress.create(newAdress);
      return response.status(201).json({ status: "Adress created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
