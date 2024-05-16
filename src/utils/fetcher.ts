import { SMARTRE_TOKEN_KEY } from "@/constants/keys";
import { paths } from "backend-sdk/schema";
import { cookies } from "next/headers";
import createClient, { Middleware } from "openapi-fetch";

const fetcher = createClient<paths>({ baseUrl: process.env.BASE_API_URL });

const attachAuthToken: Middleware = {
    async onRequest(req) {
        const token = cookies().get(SMARTRE_TOKEN_KEY);
        req.headers.set("Authorization", `Bearer ${token}`);
        req.headers.set("Content-Type", "application/json");
        return req;
    },
};

fetcher.use(attachAuthToken);

export default fetcher;
