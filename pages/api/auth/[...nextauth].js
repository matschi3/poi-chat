import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/db/models/User";
import dbConnect from "@/db/connect";
import bcrypt from "bcryptjs";

const providers = [];

if (
  process.env.VERCEL_ENV === "paused-preview" ||
  process.env.VERCEL_ENV === "paused-development" ||
  process.env.VERCEL_ENV === "paused-production"
) {
  providers.push(
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === process.env.TESTUSER_ID &&
          credentials.password === process.env.TESTUSER_SECRET
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "test@mailprovider.com",
            role: "admin",
          };
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

const callbacks = {
  async signIn({ user, account }) {
    if (account?.provider === "credentials") {
      return true;
    }
    if (account?.provider === "github") {
      await dbConnect();
      try {
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          const newUser = new User({
            email: user.email,
            preferredLogin: account.provider,
          });
          await newUser.save();
          return true;
        }
        return true;
      } catch (error) {
        console.log("error saving user to db", error);
      }
    }
  },
};

export const authOptions = { providers };

export default NextAuth({ ...authOptions, callbacks });
