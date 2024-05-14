import PageWrapper from "@/components/layout/page-wrapper";
import { ReactNode } from "react";

export const metadata = {
    title: "Dashboard | Circles",
};
export default function Layout({ children }: { children: ReactNode }) {
    return <PageWrapper title="Dashboard">{children}</PageWrapper>;
}
