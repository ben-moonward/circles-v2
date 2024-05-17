import { getResourceFolders } from "@/actions/resources";
import { infiniteQueryOptions } from "@tanstack/react-query";

// See: https://tanstack.com/query/latest/docs/framework/react/typescript#typing-query-options
export function resourceOptions() {
    return infiniteQueryOptions({
        queryKey: ["resource-folders"],
        initialPageParam: 1,
        queryFn: ({ pageParam }) =>
            getResourceFolders({ page: pageParam, perPage: 5 }),
        getNextPageParam({ data: { pagination } }) {
            return pagination.currentPage <= pagination.lastPage
                ? pagination.currentPage + 1
                : undefined;
        },
    });
}
