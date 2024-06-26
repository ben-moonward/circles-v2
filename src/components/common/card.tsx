import cn, { ClassValue } from "@/utils/cn";
import React, { FC, ReactNode } from "react";
import ArrowForward from "../icons/arrow-forward-icon";

type Props = {
    title?: React.ReactNode;
    subtitle?: string;
    children?: React.ReactNode;
    className?: ClassValue;
    headerElement?: React.ReactNode;
    footerElement?: React.ReactNode;
    isLoading?: boolean;
};

const Card: FC<Props> = ({
    title,
    subtitle,
    children,
    className,
    headerElement,
    footerElement,
    isLoading,
}) => {
    const hasHeader = title || subtitle || headerElement;

    const renderFooter = () => {
        if (!footerElement) return;
        return <div className="bottom-0">{footerElement}</div>;
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
            className={cn(
                `flex flex-col h-fit rounded-lg border-solid border 
              border-Monotone-DarkSmoke bg-white overflow-hidden`,
                className,
            )}
        >
            {hasHeader && (
                <CardHeader title={title} subtitle={subtitle}>
                    {headerElement}
                </CardHeader>
            )}
            {children}
            {renderFooter()}
            {renderLoading()}
        </div>
    );
};

type CardHeaderProps = {
    title?: ReactNode;
    subtitle?: ReactNode;
    children?: ReactNode;
};
const CardHeader: FC<CardHeaderProps> = ({ title, subtitle, children }) => {
    return (
        <div className="px-4 py-3 flex flex-row gap-4 items-center border-b border-Monotone-DarkSmoke">
            <div className="flex-1">
                {title && (
                    <h1 className="font-semibold text-xl text-CoreBrand-BrightBlue">
                        {title}
                    </h1>
                )}
                {subtitle && (
                    <h2 className="text-xs text-Monotone-SuperDarkSmoke">
                        {subtitle}
                    </h2>
                )}
            </div>
            {children}
        </div>
    );
};

export type CardRowProps = {
    title: ReactNode;
    subtitle?: ReactNode;
};
export const CardRow: FC<CardRowProps> = ({ title, subtitle }) => {
    return (
        <div className="px-4 py-3 flex flex-row justify-between items-center gap-4">
            <div className="flex-1 flex flex-col gap-1">
                <p className="font-semibold text-sm leading-tight text-CoreBrand-SmartreNavy">
                    {title}
                </p>
                {subtitle && (
                    <p className="text-xs text-Monotone-SuperDarkSmoke leading-tight">
                        {subtitle}
                    </p>
                )}
            </div>
            <ArrowForward className="text-CoreBrand-BrightBlue" />
        </div>
    );
};

export default Card;
