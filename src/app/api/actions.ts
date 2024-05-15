"use server";
import "server-only";
import fetcher from "@/services/fetcher";
import { components } from "backend-sdk/schema";

export async function getEvents({ agencyId }: { agencyId: string }) {
    const f = fetcher.path("/api/v1/events").method("get").create();
    return f(
        { agencyId, page: 1, perPage: 10 },
        { next: { tags: ["events"] } },
    );
}
