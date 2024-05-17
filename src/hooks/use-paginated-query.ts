import { useMemo, useState } from "react";

export type FetchAction<FetchActionResponse> = (params: {
    query: {
        page: number;
        perPage: number;
    };
}) => Promise<FetchActionResponse>;

export type GetNextPageParamArgs<FetchActionResponse> = (
    lastPage: FetchActionResponse | undefined,
    allPages: FetchActionResponse[],
) => number | undefined;

export type UsePaginatedQueryArgs<FetchActionResponse> = {
    initialData?: FetchActionResponse;
    initialPage?: number;
    fetchAction: FetchAction<FetchActionResponse>;
    parameters: Parameters<FetchAction<FetchActionResponse>>[0];
    getNextPageParam: GetNextPageParamArgs<FetchActionResponse>;
};

export type UsePaginatedQueryResult<FetchActionResponse> = {
    pages: FetchActionResponse[];
    hasNextPage: boolean;
    fetchNextPage: () => void;
    fetchPrevPage: () => void;
};

/**
 * usePaginatedQuery
 */
const usePaginatedQuery = <FetchActionResponse>({
    initialData,
    initialPage = 1,
    fetchAction,
    parameters,
    getNextPageParam,
}: UsePaginatedQueryArgs<FetchActionResponse>): UsePaginatedQueryResult<FetchActionResponse> => {
    const { pages, pageNumbers, getPage, addPage } = usePageMap(initialData);

    const latestPage = pageNumbers.reduce(
        (prev, curr) => (curr > prev ? curr : prev),
        0,
    );
    const nextPage = useMemo(() => {
        return latestPage !== 0
            ? getNextPageParam(getPage(latestPage), pages)
            : initialPage;
    }, [getNextPageParam, getPage, initialPage, latestPage, pages]);

    const hasNextPage = !!nextPage;

    const fetchPage = async (page: number) => {
        if (getPage(page)) return;
        const response = await fetchAction({
            ...parameters,
            query: { ...parameters.query, page },
        });
        addPage(page, response);
    };

    const fetchNextPage = () => {
        if (hasNextPage && nextPage) fetchPage(nextPage);
    };

    const fetchPrevPage = () => {
        const earliestPage =
            pageNumbers.reduce((prev, curr) => (curr < prev ? curr : prev), 1) -
            1;
        fetchPage(earliestPage - 1);
    };

    return { pages, fetchNextPage, fetchPrevPage, hasNextPage };
};

/**
 * Effectively a page 'cache' on the client side stored in state.
 * Stores FetchActionResponse by page number.
 */
const usePageMap = <FetchActionResponse>(initialData?: FetchActionResponse) => {
    const [pageMap, setPageMap] = useState(
        new Map<number, FetchActionResponse>(
            initialData ? [[1, initialData]] : null,
        ),
    );
    const pageEntries = useMemo(() => Array.from(pageMap.entries()), [pageMap]);
    const pageNumbers = useMemo(
        () => pageEntries.map(([pageNumber, _]) => pageNumber),
        [pageEntries],
    );
    const pages = useMemo(
        () => pageEntries.map(([_, response]) => response),
        [pageEntries],
    );

    const addPage = (page: number, response: FetchActionResponse) => {
        setPageMap(new Map(pageMap.set(page, response)));
    };

    const getPage = (page: number): FetchActionResponse | undefined => {
        return pageMap.get(page);
    };

    return { pages, pageNumbers, getPage, addPage };
};

export default usePaginatedQuery;
