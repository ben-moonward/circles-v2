import {
    FetchInfiniteQueryOptions,
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import React, { FC, ReactNode } from "react";

type Props = {
    queryOptions: FetchInfiniteQueryOptions<any, any, any, any, any>; // Todo: Un-any this. This works great for now as we don't actually need the types, but should obviously eventually avoid the any crutch.
    children: ReactNode;
};

// todo: upgrade with overloads to handle both infinite query and regular query with 1 component (better usability)
const InfinitePrefetchWrapper: FC<Props> = async ({
    children,
    queryOptions,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(queryOptions);
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
};

export default InfinitePrefetchWrapper;
