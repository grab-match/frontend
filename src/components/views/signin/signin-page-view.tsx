import { signIn } from "@/auth";
import Image from "next/image";

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
      <Image
        alt="Login"
        src="/images/login.svg"
        width={500}
        height={500}
        className="mx-auto"
      />

      <div className="mx-auto max-w-[325px]">
        <p className="text-center text-white font-bold text-[36px] mb-[36px]">
          GrabMatch
        </p>

        <Button
          name="type"
          type="submit"
          value="google"
          size="lg"
          className="w-full bg-white text-black"
        >
          <Image
            className="mr-[8px]"
            alt="google"
            src="/logos/google.svg"
            width={24}
            height={24}
          />
          Continue with Google
        </Button>
      </div>
    </form>
  );
}
