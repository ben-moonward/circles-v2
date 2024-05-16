"use server";
import "server-only";
import fetcher from "@/utils/fetcher";
import { cookies } from "next/headers";
import { SMARTRE_TOKEN_KEY } from "@/constants/keys";
import { redirect } from "next/navigation";

export const login = async (formData: FormData) => {
    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    const { data, error } = await fetcher.POST("/api/v1/auth/admin/login", {
        body: {
            email,
            password,
        },
    });
    if (error) console.log(`error`, error);
    if (data) console.log(`data`, data);

    const token = data?.jwtToken;

    if (token) {
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        cookies().set(SMARTRE_TOKEN_KEY, token, {
            httpOnly: true,
            secure: true,
            expires: expiresAt,
            sameSite: "lax",
            path: "/",
        });
        redirect("/");
    }
};

export const logout = async () => {
    cookies().delete(SMARTRE_TOKEN_KEY);
    redirect("/signin");
};
