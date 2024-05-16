import cn, { ClassValue } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React, { FC, ReactNode } from "react";

const button = cva("button", {
    variants: {
        intent: {
            primary: "bg-CoreBrand-BrightBlue",
            secondary: [],
        },
        size: {
            medium: "h-10 rounded-lg text-sm font-semibold",
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof button>;

const Button: FC<ButtonProps> = ({
    className = "",
    intent,
    size,
    children,
    ...props
}) => {
    return (
        <button
            className={cn(
                "flex flex-row gap-2",
                button({ intent, size, className }),
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
