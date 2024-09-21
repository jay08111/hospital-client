import axios, { AxiosRequestHeaders } from "axios";

interface RequestHeader extends AxiosRequestHeaders {
  "x-auth-token": string;
  "api-lang": string;
}

console.log(import.meta);

export class Requester {
  static header: RequestHeader;

  private static _baseURL = import.meta.env.VITE_BASE_URL;

  public static async GET(url: string) {
    const { data, status } = await axios.get(`${this._baseURL}/${url}`, {});

    return { data, status };
  }
  public static async POST(url: string, data: unknown) {
    return await axios.post(`${this._baseURL}/${url}`, data, {});
  }
  public static async PUT(url: string, data: unknown) {
    return await axios.put(`${this._baseURL}/${url}`, data, {});
  }
  public static async DELETE(url: string) {
    return await axios.delete(`${this._baseURL}/${url}`, {});
  }
}
