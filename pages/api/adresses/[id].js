import dbConnect from "../../../db/connect.js";
import Adress from "../../../db/models/Adress.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const adress = await Adress.find(id);
    if (!adress) {
      return response.status(404).json({ message: "No adress found" });
    }
    return response.status(200).json(adress);
  } else if (request.method === "DELETE") {
    const deletedAdress = await Adress.findByIdAndDelete(id);
    if (!deletedAdress) {
      return response.status(404).json({ message: "No Adress found" });
    }
    return response.status(200).json(deletedAdress);
  }
  return response.status(405).json({ status: "Method not allowed" });
}
