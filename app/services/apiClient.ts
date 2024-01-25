import axios from "axios";
const baseURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.baseURL = baseURL;
axios.defaults.headers.common = {
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
}

export const client = axios.create({});
export const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
