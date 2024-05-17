import React, { FC, ReactNode, Suspense } from "react";
import Header from "./header";
import cn, { ClassValue } from "@/utils/cn";

type Props = {
    title: string;
    children?: ReactNode;
    className?: ClassValue;
};

const PageWrapper: FC<Props> = ({ title, children, className }) => {
    return (
        <>
            <Header title={title} className={"px-14 h-[88px]"} />
            <div
                className={cn(
                    "h-[calc(100vh-88px)] overflow-y-scroll px-14",
                    className,
                )}
            >
                <Suspense fallback="LOADING">{children}</Suspense>
            </div>
        </>
    );
};

export default PageWrapper;
