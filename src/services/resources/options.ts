// Defining query options and importing them is useful for prefetching, where the query will be made in 2 places (server & client)
// See: https://tanstack.com/query/latest/docs/framework/react/typescript#typing-query-options
// Todo: Investigate why these options must defined be in a separate file to the client component or server action.

import { getNextPageParam } from "@/utils/query";
import { infiniteQueryOptions } from "@tanstack/react-query";
import { getResourceFolders } from "./actions";

export function resourceOptions() {
    return infiniteQueryOptions({
        queryKey: ["resource-folders"],
        initialPageParam: 1,
        queryFn: ({ pageParam }) =>
            getResourceFolders({ page: pageParam, perPage: 5 }),
        getNextPageParam,
    });
}
