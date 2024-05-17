import Card, { CardRow } from "@/components/common/card";
import PageWrapper from "@/components/layout/page-wrapper";
import { ReactNode } from "react";
import ResourceFolders from "./resource-folders";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import { resourceOptions } from "@/services/options";

export const metadata = {
    title: "Resources | Circles",
};

export default async function Layout({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery(resourceOptions());

    return (
        <PageWrapper title="Resources">
            <div className="h-full grid grid-cols-[500px_1fr] gap-4 pb-8">
                <Card title="Resource Folders" className={"max-h-full"}>
                    <HydrationBoundary state={dehydrate(queryClient)}>
                        <ResourceFolders className="" />
                    </HydrationBoundary>
                </Card>
                {children}
            </div>
        </PageWrapper>
    );
}
