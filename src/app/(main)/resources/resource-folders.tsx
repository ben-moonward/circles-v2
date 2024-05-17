"use client";

import { CardRow } from "@/components/common/card";
import { InfiniteScroll } from "@/components/utilities/infinite-scroll";
import { getItemsFromPagination } from "@/components/utilities/query";
import { resourceOptions } from "@/services/options";
import cn, { ClassValue } from "@/utils/cn";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

type Props = {
    className?: ClassValue;
};

const ResourceFolders = ({ className }: Props) => {
    const { fetchNextPage, data, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery(resourceOptions());
    const folders = getItemsFromPagination(data);

    return (
        <InfiniteScroll
            className={cn(
                "flex flex-col divide-y divide-Monotone-DarkSmoke",
                className,
            )}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
        >
            {folders.map((item, i) => (
                <CardRow
                    key={i}
                    title={item.name}
                    subtitle={`${item._count.resources} Documents`}
                />
            ))}
        </InfiniteScroll>
    );
};

export default ResourceFolders;
