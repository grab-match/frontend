import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const response = await auth();
  return <Button>TESTT</Button>;
}
