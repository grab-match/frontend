import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";

export const {
  handlers,
  signIn,
  signOut,
  unstable_update: update,
  auth,
} = NextAuth({
  ...authConfig,
  providers: [Google],
});
