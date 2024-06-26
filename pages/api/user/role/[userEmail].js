import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import { getToken } from "next-auth/jwt";

/* to get users ROLE */
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
            return response.status(200).json({ role: user.role });
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
