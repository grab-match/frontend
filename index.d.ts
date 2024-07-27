import { UserRoleEnum } from "@/enums";
import { AxiosHeaders } from "axios";
import NextAuth, { DefaultSession, User } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

declare module "next-auth" {
  export interface User {
    name: string;
    email: string;
    image: string;
    access_token: string;
    id_token: string;
  }
}
