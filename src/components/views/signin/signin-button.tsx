"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { authSocial } from "@/services/api/auth";

const GoogleLoginButton = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      console.log({ response });
      const data = await authSocial(response.access_token);

      console.log({ data });
    },
    onError: (error) => {},
  });

  return (
    <Button
      onClick={() => googleLogin()}
      name="type"
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
  );
};

export default GoogleLoginButton;
