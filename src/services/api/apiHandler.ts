import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import https from "https";
import queryString from "qs";
import { camelizeKeys, decamelizeKeys } from "humps";
import { ROUTE_PATHS } from "@/components/views/route";

const client = axios.create({
  baseURL: process.env.NEXT_API_URL,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const handleUnAuthorized = async () => {};

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.paramsSerializer = (params) => {
      return queryString.stringify(params, { indices: false });
    };

    const newConfig = { ...config };

    if (config.params) {
      const newParams = { ...config.params };
      // eslint-disable-next-line array-callback-return
      Object.keys(newParams).map((key) => {
        // eslint-disable-next-line no-unused-expressions
        !newParams[key] && delete newParams[key];
      });
      newConfig.params = decamelizeKeys(newParams);
    }

    if (config.data) {
      newConfig.data = decamelizeKeys(config.data);
    }

    return newConfig;
  },
  (error: any) => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== ROUTE_PATHS.SIGNIN
    ) {
      handleUnAuthorized();
    }

    const errorMessage =
      error?.response?.data?.message ??
      error?.response?.data ??
      error?.response ??
      error?.message ??
      error?.response?.statusText ??
      error?.response?.status ??
      error?.message ??
      "Something went wrong";

    /** TOAST ERROR HERE */

    throw {
      ...(error?.response?.data ?? error?.response ?? error),
      status: error?.response?.status,
    };
  }
);

client.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const newResponse = { ...response };

    if (newResponse?.data) {
      newResponse.data = camelizeKeys(newResponse.data);
    }

    return newResponse?.data ?? newResponse;
  },
  (error: any) => {
    if (
      error?.response?.status === 401 &&
      window.location.pathname !== ROUTE_PATHS.SIGNIN
    ) {
      handleUnAuthorized();
    }

    const errorMessage =
      error?.response?.data?.message ??
      error?.response?.data ??
      error?.response ??
      error?.message ??
      error?.response?.statusText ??
      error?.response?.status ??
      error?.message ??
      "Something went wrong";

    /** TOAST ERROR HERE */

    throw {
      ...(error?.response?.data ?? error?.response ?? error),
      status: error?.response?.status,
    };
  }
);

export default client;
