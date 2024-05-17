import Card from "@/components/common/card";
import PageWrapper from "@/components/layout/page-wrapper";
import { ReactNode } from "react";
import ResourceFolders from "./resource-folders";
import { resourceOptions } from "@/services/resources/options";
import InfinitePrefetchWrapper from "@/components/utilities/infinite-prefetch-wrapper";

export const metadata = {
    title: "Resources | Circles",
};

export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <PageWrapper title="Resources">
            <div className="h-full grid grid-cols-[500px_1fr] gap-4 pb-8">
                <Card title="Resource Folders" className={"max-h-full"}>
                    <InfinitePrefetchWrapper queryOptions={resourceOptions()}>
                        <ResourceFolders className="" />
                    </InfinitePrefetchWrapper>
                </Card>
                {children}
            </div>
        </PageWrapper>
    );
}

// export default async function Layout({ children }: { children: ReactNode }) {
//     const queryClient = new QueryClient();
//     await queryClient.prefetchInfiniteQuery(resourceOptions());

//     return (
//         <PageWrapper title="Resources">
//             <div className="h-full grid grid-cols-[500px_1fr] gap-4 pb-8">
//                 <Card title="Resource Folders" className={"max-h-full"}>
//                     <HydrationBoundary state={dehydrate(queryClient)}>
//                         <ResourceFolders className="" />
//                     </HydrationBoundary>
//                 </Card>
//                 {children}
//             </div>
//         </PageWrapper>
//     );
// }
