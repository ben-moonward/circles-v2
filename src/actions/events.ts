"use server";
import "server-only";
import fetcher from "@/utils/fetcher";
import { paths } from "backend-sdk/schema";

export const getEvents = async (
    params: paths["/api/v1/admin/events"]["get"]["parameters"],
) =>
    fetcher.GET("/api/v1/admin/events", {
        params,
    });
