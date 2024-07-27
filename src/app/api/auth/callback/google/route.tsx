import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { getParams } from "@/utils/api";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const session = await auth();
  const params = getParams(request.nextUrl.search);

  console.log({ params });

  redirect("/");
}
