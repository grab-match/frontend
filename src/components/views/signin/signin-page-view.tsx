import { auth, signIn } from "@/auth";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

        <div className="flex flex-col gap-[30px]">
          <Input type="email" placeholder="Email" className="bg-white" />
          <Input type="password" placeholder="Password" className="bg-white" />

          <div className="flex flex-row gap-[16px]">
            <Button type="submit" className="bg-emerald-500">
              Login
            </Button>
            <Button
              className="flex-grow bg-white text-black"
              onClick={async () => {
                "use server";
                const response = await auth();
                console.log({ response });
              }}
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
        </div>
      </div>
    </form>
  );
}
