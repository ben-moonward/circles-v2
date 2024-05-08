import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
};

const Sidebar: FC<Props> = ({ className = "" }) => {
    return (
        <nav
            className={cn(
                "h-screen border-r overflow-y-hidden w-[200px]",
                className,
            )}
        >
            <h1 className="text-center text-2xl my-4">Demo</h1>
            <div className="flex flex-col divide-y overflow-y-auto">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            className="p-4 flex items-center justify-center hover:bg-white/50 transition-colors cursor-pointer"
                            key={i}
                        >
                            {i}
                        </div>
                    ))}
            </div>
        </nav>
    );
};

export default Sidebar;
