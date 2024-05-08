import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC, ReactNode } from "react";

type Props = {
    className?: ClassValue;
    children: ReactNode;
};

const Animator: FC<Props> = ({ className = "", children }) => {
    return <div className={cn("", className)}>{children}</div>;
};

export default Animator;
