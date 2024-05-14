import { useMemo, useState } from "react";

export type FetchActionResponse<TData> = {
    items: TData[];
    page: number;
};

export type FetchAction<TData> = (params: {
    page: number;
}) => Promise<FetchActionResponse<TData>>;

export type UsePaginatedQueryArgs<TData> = {
    initialData?: FetchActionResponse<TData>;
    fetchAction: FetchAction<TData>;
    parameters: Parameters<FetchAction<TData>>[0];
};

export type UsePaginatedQueryResult<TData> = {
    items: TData[];
    fetchNextPage: () => void;
    fetchPrevPage: () => void;
};

/**
 * usePaginatedQuery
 */
const usePaginatedQuery = <TData>({
    initialData,
    fetchAction,
    parameters,
}: UsePaginatedQueryArgs<TData>): UsePaginatedQueryResult<TData> => {
    const { pages, items, getPage, addPage } = usePageMap(initialData);

    const fetchPage = async (page: number) => {
        if (getPage(page)) return;
        const res = await fetchAction({ ...parameters, page });
        addPage(page, res.items);
    };

    const pageNumbers = pages.map(([page]) => page);

    const fetchNextPage = () => {
        const latestPage = pageNumbers.reduce(
            (prev, curr) => (curr > prev ? curr : prev),
            0,
        );
        fetchPage(latestPage + 1);
    };

    const fetchPrevPage = () => {
        const earliestPage =
            pageNumbers.reduce((prev, curr) => (curr < prev ? curr : prev), 1) -
            1;
        fetchPage(earliestPage - 1);
    };

    return { items, fetchNextPage, fetchPrevPage };
};

/**
 * Effectively a page 'cache' on the client side stored in state.
 */
const usePageMap = <TData>(initialData?: FetchActionResponse<TData>) => {
    const [pageMap, setPageMap] = useState(
        new Map<number, TData[]>(
            initialData ? [[initialData.page, initialData.items]] : null,
        ),
    );
    const pages = useMemo(() => Array.from(pageMap.entries()), [pageMap]);
    const items = useMemo(() => pages.flatMap(([_, items]) => items), [pages]);

    const addPage = (page: number, items: TData[]) => {
        setPageMap(new Map(pageMap.set(page, items)));
    };

    const getPage = (page: number): TData[] | undefined => {
        return pageMap.get(page);
    };

    return { pages, items, getPage, addPage };
};

export default usePaginatedQuery;
