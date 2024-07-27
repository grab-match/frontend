import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        return !!profile?.email_verified;
      }
      return true;
    },
    async jwt({ token, account, session }) {
      return { ...token, ...account };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          access_token: token?.access_token,
          id_token: token?.id_token,
        },
      };
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  providers: [],
} satisfies NextAuthConfig;
