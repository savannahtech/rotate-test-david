import { ThemeTypings } from '@chakra-ui/react'
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

import { API_BASE_URL } from "./constants";

type Api = {
  url: string;
  method?: "GET" | "POST";
  data: { [key: string]: any };
};

export const api = async ({ url, method = "GET", data }: Api) => {
  const params = {
    method,
    url: `${API_BASE_URL}/${url}`,
  } as AxiosRequestConfig;
  const headers = {} as AxiosRequestHeaders;

  const accessToken = localStorage.getItem("accessToken");

  if (data) {
    params.data = data;
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  params.headers = headers;

  const response = await axios(params);
  return response;
};
