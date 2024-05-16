import Card from "@/components/common/card";
import PageWrapper from "@/components/layout/page-wrapper";
import fetcher from "@/utils/fetcher";
import { ReactNode } from "react";

export const metadata = {
    title: "Resources | Circles",
};

export default async function Layout({ children }: { children: ReactNode }) {
    const res = await fetcher.GET("/api/v1/admin/resource-folders", {
        params: { query: { page: 1, perPage: 10 } },
        next: { revalidate: 0 },
    });

    console.log(`res.error`, res.error);

    res.data?.data.map(d => console.log(`data`, d.name));

    return (
        <PageWrapper
            title="Resources"
            className="grid grid-cols-[500px_1fr] gap-4"
        >
            <Card title="Resource Folders" className={"basis-1/2"}>
                <div className="con">content</div>
            </Card>
            {children}
        </PageWrapper>
    );
}
