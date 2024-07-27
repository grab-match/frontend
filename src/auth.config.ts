import type { NextAuthConfig, Session } from "next-auth";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      console.log("JALAN COK");

      console.log({ account, profile });

      if (account?.provider === "google") {
        return !!profile?.email_verified;
      }
      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  providers: [],
} satisfies NextAuthConfig;
