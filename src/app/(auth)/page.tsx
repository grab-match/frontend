import { auth, update } from "@/auth";
import { Button } from "@/components/ui/button";
import { ROUTE_PATHS } from "@/components/views/route";
import { API_PATHS } from "@/services/api/paths";
import axios from "axios";
import { redirect } from "next/navigation";

export default async function Home() {
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

    // await update({ user: { ...data, accessToken: headers["set-cookie"] } });
  } catch (e: any) {
    console.log({ e });
    redirect(ROUTE_PATHS.SIGNIN);
  }

  console.log({ user: await auth() });

  return <Button>TESTT</Button>;
}
