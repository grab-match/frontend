import { auth } from "@/auth";
import { ROUTE_PATHS } from "@/components/views/route";
import { API_PATHS } from "@/services/api/paths";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await auth();

  if (!response?.user?.id_token) {
    redirect(ROUTE_PATHS.SIGNIN);
  }

  try {
    const { headers } = await axios.post(
      `${process.env.API_URL}${API_PATHS.AUTH.SOCIAL}`,
      {
        token_id: response?.user?.id_token,
      }
    );

    const { data } = await axios.get(
      `${process.env.API_URL}${API_PATHS.AUTH.ROOT}`,
      {
        headers: {
          Cookie: headers["set-cookie"],
        },
      }
    );
  } catch (e: any) {
    redirect(ROUTE_PATHS.SIGNIN);
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-teal-600 to-teal-950">
      {children}
    </div>
  );
}
