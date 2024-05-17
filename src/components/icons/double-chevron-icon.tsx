const DoubleChevronIcon = ({
    color,
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.91 0L0.5 1.41L5.08 6L0.5 10.59L1.91 12L7.91 6L1.91 0Z"
                fill={color ?? "currentColor"}
            />
            <path
                d="M8.5 0L7.09 1.41L11.67 6L7.09 10.59L8.5 12L14.5 6L8.5 0Z"
                fill={color ?? "currentColor"}
            />
        </svg>
    );
};

export default DoubleChevronIcon;
