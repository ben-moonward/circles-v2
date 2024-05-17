import { ReactNode, HTMLInputTypeAttribute, FC } from "react";

export type SmartreInputProps = {
    label?: ReactNode;
    placeholder?: string;
    name: string;
    type?: HTMLInputTypeAttribute;
};

const SmartreInput: FC<SmartreInputProps> = ({
    label,
    name,
    placeholder,
    type,
}) => {
    return (
        <div className="flex flex-col gap-1 text-sm">
            {label && (
                <label htmlFor={name} className="font-semibold leading-tight">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                className="border border-Monotone-Smoke rounded py-1 px-2"
                type={type}
            />
        </div>
    );
};

export default SmartreInput;
