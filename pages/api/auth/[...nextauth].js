import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

if (
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development" ||
  process.env.VERCEL_ENV === "production"
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
          return { id: "1", name: "Admin", email: "test@mailprovider.com" };
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

export const authOptions = { providers };

export default NextAuth(authOptions);
