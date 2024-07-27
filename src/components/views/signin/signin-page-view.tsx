import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignInPageView() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", {
          redirectTo: "/",
        });
      }}
    >
      <Button type="submit">Signin with Google</Button>
      <Button
        onClick={async () => {
          "use server";
          const response = await auth();
          console.log({ response });
        }}
      >
        Check Auth
      </Button>
    </form>
  );
}
