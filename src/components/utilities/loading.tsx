import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
    isLoading: boolean;
};

const Loading: FC<Props> = ({ className = "", isLoading }) => {
    if (!isLoading) return null;
    return <div className={cn("", className)}>Loading</div>;
};

export default Loading;
