const ErrorIcon = ({
    height,
    width,
    color,
    className,
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width ?? 24}
                height={height ?? 24}
                fill="none"
                viewBox="0 0 24 24"
                stroke={color ?? "#D86060"}
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        </div>
    );
};

export default ErrorIcon;
