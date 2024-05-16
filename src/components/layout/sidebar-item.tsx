"use client";

import cn, { ClassValue } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

type Props = {
    label: string;
    icon: ReactNode;
    slug: string;
    className?: ClassValue;
};

const SidebarItem: FC<Props> = ({ label, icon, slug, className }) => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsActive(pathname.split("/")[1] === slug);
    }, [pathname, slug]);

    return (
        <Link
            href={`/${slug}`}
            className={cn(
                "w-full py-3 -my-3 flex flex-col gap-1 items-center justify-center hover:bg-white/40 transition-colors",
                isActive ? "text-white" : "text-white/40",
                className,
            )}
            onClick={() => setIsActive(true)}
        >
            {icon}
            <p className={cn("leading-none text-[10px] font-semibold")}>
                {label}
            </p>
        </Link>
    );
};

export default SidebarItem;
