import { SMARTRE_TOKEN_KEY } from "@/constants/keys";
import { paths } from "backend-sdk/schema";
import { cookies } from "next/headers";
import { Fetcher } from "openapi-typescript-fetch";
import { Middleware } from "openapi-typescript-fetch";

const fetcher = Fetcher.for<paths>();

const attachAuthToken: Middleware = async (url, init, next) => {
    const token = cookies().get(SMARTRE_TOKEN_KEY)?.value;

    // --
    // -- Todo: Add redirect on missing or expired token
    // --

    if (!token) return await next(url, init);
    const newInit = {
        ...init,
        headers: {
            ...init.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };

    const response = await next(url, newInit);

    // --
    // -- Todo: Add redirect on unauthenticated response
    // --

    return response;
};

fetcher.configure({
    baseUrl: process.env.BASE_API_URL,
    use: [attachAuthToken],
});

export default fetcher;
