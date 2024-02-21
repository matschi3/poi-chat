import User from "@/db/models/User";
import dbConnect from "@/db/connect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password } = await request.json();

  await dbConnect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({ email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse("User is created", { status: 200 });
  } catch (error) {
    return NextResponse.error(error, { status: 500 });
  }
};
