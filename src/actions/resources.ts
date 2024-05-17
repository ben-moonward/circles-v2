"use server";
import fetcher from "@/utils/fetcher";

export const getResourceFolders = fetcher
    .path("/api/v1/admin/resource-folders")
    .method("get")
    .create();
