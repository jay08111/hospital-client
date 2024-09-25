import axios, { AxiosInstance } from "axios";

/** http 통신 timeout 설정 */
export const HTTP_REQUEST_TIMEOUT = 20000;

/** 어느 환경인지 바라보는 변수 */
export const IS_VITE_DEV = import.meta.env.MODE === "development";
export const IS_VITE_PROD = import.meta.env.MODE === "production";

/** http 통신 상태 코드 */
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

/** url 파라미터 생성 */
/**
 * @param {string} params url로 만들어야 할 rest parameter
 * ex) buildParam("key1", "value1", "key2", "value2", "key3", "value3")
 * @returns {string} url parameter
 */
export const buildParam = (...params: any[]): string => {
  if (params.length % 2 !== 0) {
    return "";
  }

  const queryString = [];

  for (let i = 0; i < params.length; i += 2) {
    const key = encodeURIComponent(params[i]);
    const value = encodeURIComponent(params[i + 1]);
    queryString.push(`${key}=${value}`);
  }

  return `?${queryString.join("&")}`;
};

export class Caller {
  private static InIt(token: string): AxiosInstance {
    return axios.create({
      baseURL: import.meta.env.VITE_BASE_URL as string,
      timeout: HTTP_REQUEST_TIMEOUT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static async GET<T>(
    url: string,
    token: string,
    params?: any
  ): Promise<T | undefined> {
    const _queryToSend = this.InIt(token);

    try {
      const res = await _queryToSend.get<T>(url, { params });

      if (res && res.status === HTTP_STATUS.OK) {
        return res.data;
      }
    } catch (error) {
      console.log(`GET request error =====> ${url}`, error);
    }

    return undefined;
  }

  static async POST_RAW<T>(url: string, data: any): Promise<T | undefined> {
    const _queryToSend = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL as string,
      timeout: HTTP_REQUEST_TIMEOUT,
    });

    try {
      const res = await _queryToSend.post<T>(url, data);

      if (res && res.status === HTTP_STATUS.OK) {
        return res.data;
      }
    } catch (error) {
      console.log(`POST_RAW request error =====> /`, error);
    }

    return undefined;
  }

  static async POST<T>(
    url: string,
    token: string,
    data: any
  ): Promise<T | undefined> {
    const _queryToSend = this.InIt(token);

    try {
      const res = await _queryToSend.post<T>(url, data);

      if (res && res.status === HTTP_STATUS.OK) {
        return res.data;
      }
    } catch (error) {
      console.log(`POST request error =====> ${url}`, error);
    }

    return undefined;
  }
  static async PUT<T>(
    url: string,
    token: string,
    data: any
  ): Promise<T | undefined> {
    const _queryToSend = this.InIt(token);

    try {
      const res = await _queryToSend.put<T>(url, data);

      if (res && res.status === HTTP_STATUS.OK) {
        return res.data;
      }
    } catch (error) {
      console.log(`PUT request error =====> ${url}`, error);
    }

    return undefined;
  }
  static async DELETE<T>(
    url: string,
    token: string,
    data: any
  ): Promise<T | undefined> {
    const _queryToSend = this.InIt(token);

    try {
      const res = await _queryToSend.delete<T>(url, data);

      if (res && res.status === HTTP_STATUS.OK) {
        return res.data;
      }
    } catch (error) {
      console.log(`DELETE request error =====> ${url}`, error);
    }

    return undefined;
  }
}
