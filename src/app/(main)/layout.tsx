import Sidebar from "@/components/layout/sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="grid grid-cols-[96px_1fr] overflow-hidden bg-Monotone-LightSmoke">
            <Sidebar />
            <div className="h-screen">{children}</div>
        </div>
    );
}
