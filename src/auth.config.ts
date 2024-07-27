import type { NextAuthConfig, Session } from "next-auth";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  providers: [],
} satisfies NextAuthConfig;
