import apiHandler from "./apiHandler";
import { API_PATHS } from "./paths";

export const authSocial = (tokenId?: string) => {
  return apiHandler.post(API_PATHS.AUTH.SOCIAL, {
    tokenId,
  });
};