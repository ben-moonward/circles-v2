"use server";
import "server-only";
import { cookies } from "next/headers";
import { SMARTRE_TOKEN_KEY } from "@/constants/keys";
import { redirect } from "next/navigation";
import fetcher from "@/utils/fetcher";

export const login = async (formData: FormData) => {
    const email = formData.get("email")?.toString() ?? ""; // todo: streamline getting data from formData
    const password = formData.get("password")?.toString() ?? "";
    try {
        const login = fetcher
            .path("/api/v1/auth/admin/login")
            .method("post")
            .create();
        const { data } = await login({
            email,
            password,
        });
        const token = data.jwtToken;
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        cookies().set(SMARTRE_TOKEN_KEY, token, {
            httpOnly: true,
            secure: true,
            expires: expiresAt,
            sameSite: "lax",
            path: "/",
        });
        redirect("/");
    } catch {
        redirect("/signin");
    }
};

export const logout = async () => {
    cookies().delete(SMARTRE_TOKEN_KEY);
    redirect("/signin");
};
