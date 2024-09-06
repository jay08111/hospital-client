import axios, { AxiosRequestHeaders } from "axios";

interface RequestHeader extends AxiosRequestHeaders {
    "x-auth-token": string;
    "api-lang": string;
}

export class Requester {
    static header: RequestHeader;

    public static async GET(url: string) {
        const { data, status } = await axios.get(
            `http://localhost:3333/${url}`,
            {
                // headers: {
                //     "x-auth-token": this.header["x-auth-token"],
                //     "api-lang": this.header["api-lang"],
                // },
            }
        );

        return { data, status };
    }
    public static async POST(url: string, data: unknown) {
        return await axios.post(`${import.meta.env.BASE_URL}/${url}`, data, {
            headers: {
                "x-auth-token": this.header["x-auth-token"],
                "api-lang": this.header["api-lang"],
            },
        });
    }
    public static async PUT(url: string, data: unknown) {
        return await axios.put(`${import.meta.env.BASE_URL}/${url}`, data, {
            headers: {
                "x-auth-token": this.header["x-auth-token"],
                "api-lang": this.header["api-lang"],
            },
        });
    }
    public static async DELETE(url: string) {
        return await axios.delete(`${import.meta.env.BASE_URL}/${url}`, {
            headers: {
                "x-auth-token": this.header["x-auth-token"],
                "api-lang": this.header["api-lang"],
            },
        });
    }
}
