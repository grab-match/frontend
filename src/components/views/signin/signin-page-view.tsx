import Image from "next/image";

import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./signin-button";

export function SignInPageView() {
  return (
    <GoogleOAuthProvider clientId={process.env.AUTH_GOOGLE_ID || ""}>
      <form
        action={async () => {
          "use server";
        }}
      >
        <Image
          alt="Login"
          src="/images/login.svg"
          width={500}
          height={500}
          className="mx-auto"
        />

        <div className="mx-auto max-w-[325px] flex flex-col justify-center">
          <p className="text-center text-white font-bold text-[36px] mb-[36px]">
            GrabMatch
          </p>

          <GoogleLoginButton />
        </div>
      </form>
    </GoogleOAuthProvider>
  );
}
