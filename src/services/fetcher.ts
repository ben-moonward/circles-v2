import { paths } from "backend-sdk/schema";
import { cookies } from "next/headers";
import { Fetcher } from "openapi-typescript-fetch";
import { Middleware } from "openapi-typescript-fetch";

const fetcher = Fetcher.for<paths>();

const attachAuthToken: Middleware = async (url, init, next) => {
    const token = cookies().get(SMARTRE_TOKEN_KEY);
    if (!token) return await next(url, init);
    const newInit = {
        ...init,
        headers: {
            ...init.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };
    return await next(url, newInit);
};

fetcher.configure({
    baseUrl: process.env.BASE_URL,
    use: [attachAuthToken],
});

export default fetcher;
