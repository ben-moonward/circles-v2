import CirclesLogoIcon from "@/components/icons/circles-logo-icon";
import DashboardIcon from "@/components/icons/sidebar/dashboard-icon";
import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";
import SidebarItem from "./sidebar-item";
import LogoutIcon from "../icons/sidebar/logout-icon";
import { logout } from "@/services/auth/actions";

type SidebarProps = {
    className?: ClassValue;
};

const Sidebar: FC<SidebarProps> = ({ className = "" }) => {
    return (
        <nav className={cn("bg-CoreBrand-BrightBlue", className)}>
            <div className="h-full flex flex-col gap-6 items-center py-6 overflow-y-auto">
                <CirclesLogoIcon className="" />
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
                <SidebarItem
                    icon={<DashboardIcon />}
                    label="Resources"
                    slug="resources"
                />
                <div className="flex-1" />
                <LogoutButton />
            </div>
        </nav>
    );
};

const LogoutButton = () => {
    return (
        <form action={logout} className="contents">
            <button
                className={cn(
                    "w-full py-3 -my-3 flex flex-col gap-1 items-center justify-center hover:bg-white/40 transition-colors text-white",
                )}
            >
                <LogoutIcon />
                <p className={cn("leading-none text-[10px] font-semibold")}>
                    Logout
                </p>
            </button>
        </form>
    );
};

export default Sidebar;
