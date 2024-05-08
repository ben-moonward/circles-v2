import cn, { ClassValue } from "@/utils/cn";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
    prop: unknown;
};

const Input: FC<Props> = ({ className = "", prop }) => {
    return <div className={cn("", className)}></div>;
};

export default Input;
