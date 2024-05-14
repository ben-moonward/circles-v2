import cn, { ClassValue } from "@/utils/cn";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
};

const HomeContent: FC<Props> = ({ className = "" }) => {
    return <div className={cn("py-8", className)}>Home Content</div>;
};

export default HomeContent;
