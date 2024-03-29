import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();
  const { userEmail } = request.query;
  if (request.method === "GET") {
    try {
      const user = await User.findOne({ email: userEmail });
      if (user) {
        return response.status(200).json({ favorites: user.favorites });
      } else {
        return response.status(404).json({ message: "No user found" });
      }
    } catch (error) {
      return response.status(500).json({ message: "Server error" });
    }
  } else if (request.method === "PUT") {
    try {
      const user = await User.findOne({ email: userEmail });
      if (user) {
        const updatedFavorites = [...user.favorites, request.body.poiId];
        user.favorites = updatedFavorites;
        await user.save();
        return response.status(200).json({ favorites: user.favorites });
      } else {
        return response.status(404).json({ message: "No user found" });
      }
    } catch (error) {
      return response.status(500).json({ message: "Server error" });
    }
  } else if (request.method === "DELETE") {
    try {
      const user = await User.findOne({ email: userEmail });
      if (user) {
        const updatedFavorites = user.favorites.filter((fav) => {
          return fav.toString() !== request.body.poiId.toString();
        });
        user.favorites = updatedFavorites;
        await user.save();
        return response.status(200).json({ favorites: user.favorites });
      } else {
        return response.status(404).json({ message: "No user found" });
      }
    } catch (error) {
      return response.status(500).json({ message: "Server error" });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
