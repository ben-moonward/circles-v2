import cn, { ClassValue } from "@/utils/cn";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
    title: string;
};

const Header: FC<Props> = ({ className = "", title }) => {
    return (
        <div
            className={cn(
                "pt-8 pb-6 flex flex-row bg-Monotone-LightSmoke",
                className,
            )}
        >
            <h1 className="text-[32px] leading-[32px] font-semibold text-black">
                {title}
            </h1>
        </div>
    );
};

export default Header;
