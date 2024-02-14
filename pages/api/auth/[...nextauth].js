import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

if (process.envv.VERCEL_ENV === "preview") {
  providers.push(
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.username === "admin" &&
          credentials.password === "letmepass"
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
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
    })
  );
}

export const authOptions = { providers };

export default NextAuth(authOptions);
