import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const token = await getToken({ req: request });
  if (token) {
    const { userEmail } = request.query;
    if (token.email === userEmail) {
      await dbConnect();
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
    } else {
      return response
        .status(401)
        .json({ message: "Unauthorized access. Wrong account." });
    }
  } else {
    return response
      .status(401)
      .json({ message: "Unauthorized access. Please log in." });
  }
}
