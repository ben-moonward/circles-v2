import CirclesLogoIcon from "@/components/icons/circles-logo-icon";
import DashboardIcon from "@/components/icons/sidebar/dashboard-icon";
import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC, Suspense } from "react";
import SidebarItem from "./sidebar-item";

type SidebarProps = {
    className?: ClassValue;
};

const Sidebar: FC<SidebarProps> = ({ className = "" }) => {
    return (
        <nav className={cn("bg-CoreBrand-BrightBlue", className)}>
            <div className="h-full flex flex-col gap-6 items-center mt-6 overflow-y-auto">
                <CirclesLogoIcon />
                <SidebarItem
                    icon={<DashboardIcon />}
                    label="Dashboard"
                    slug="dashboard"
                />
                <SidebarItem
                    icon={<DashboardIcon />}
                    label="Members"
                    slug="members"
                />
                <SidebarItem
                    icon={<DashboardIcon />}
                    label="LinkUp"
                    slug="linkup"
                />
                <SidebarItem
                    icon={<DashboardIcon />}
                    label="Prospects"
                    slug="prospects"
                />
            </div>
        </nav>
    );
};

export default Sidebar;
