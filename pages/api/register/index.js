import User from "@/db/models/User";
import dbConnect from "@/db/connect";
import bcrypt from "bcryptjs";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "POST") {
    try {
      const { email, password } = request.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return response.status(400).json({ status: "Email is already in use" });
      }
      const hashedPassword = await bcrypt.hash(password, 5);
      const newUser = new User({ email, password: hashedPassword });
      await User.create(newUser);
      return response.status(201).json({ status: "User is created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
