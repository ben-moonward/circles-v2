import cn, { ClassValue } from "@/utils/cn";
import React, { FC, ReactNode } from "react";

type Props = {
    title?: React.ReactNode;
    subtitle?: string;
    children?: React.ReactNode;
    className?: ClassValue;
    bodyClassName?: string;
    headerElement?: React.ReactNode;
    footerElement?: React.ReactNode;
    isLoading?: boolean;
};

const Card: FC<Props> = ({
    title,
    subtitle,
    children,
    className,
    bodyClassName,
    headerElement,
    footerElement,
    isLoading,
}) => {
    const renderHeader = () => {
        if (!title && !subtitle && !headerElement) return;
        return (
            <div className="px-4 py-3 flex flex-row gap-4 ">
                <div className="grow">
                    <h1 className="font-semibold text-xl text-CoreBrand-BrightBlue">
                        {title}
                    </h1>
                    <h2 className="text-xs text-Monotone-SuperDarkSmoke">
                        {subtitle}
                    </h2>
                </div>
                {renderHeaderElement()}
            </div>
        );
    };
    const renderBody = () => {
        if (!children) return;
        return <div className={`${bodyClassName ?? ""}`}>{children}</div>;
    };
    const renderFooter = () => {
        if (!footerElement) return;
        return <div className="bottom-0">{footerElement}</div>;
    };
    const renderHeaderElement = () => {
        if (!headerElement) return;
        return (
            <div className="flex flex-row items-center rounded-b-lg">
                {headerElement}
            </div>
        );
    };
    const renderLoading = () => {
        if (!isLoading) return;
        return (
            <div className="absolute inset-0 bg-white/60 animate-pulse flex items-center justify-center">
                {/* <Loading shape='lg_rounded' /> */}
            </div>
        );
    };

    return (
        <div
            className={`card flex flex-col divide-y h-fit rounded-lg border-solid border 
              border-Monotone-Smoke border-opacity-70 divide-Monotone-Smoke bg-white overflow-hidden ${
                  className ?? ""
              }`}
        >
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
            {renderLoading()}
        </div>
    );
};

export default Card;
