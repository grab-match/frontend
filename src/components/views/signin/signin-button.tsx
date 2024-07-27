"use client";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { authSocial } from "@/services/api/auth";
import { setAccessToken } from "@/utils/api";

const GoogleLoginButton = () => {
  const handleLogin = async (response: CredentialResponse) => {
    const { data } = await authSocial(response.credential);
    setAccessToken(data?.token);
  };
  return (
    <GoogleLogin
      containerProps={{
        style: {
          margin: "0 auto",
        },
      }}
      onSuccess={handleLogin}
    />
  );
};

export default GoogleLoginButton;
